import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import Logo from 'assets/svg/logo.svg'
import AppsIcon from 'assets/svg/apps.svg'

import { scrollToSection } from 'lib/utils'
import { useClickOutside } from 'lib/hooks'

import stl from './Header.module.scss'

const Header = ({ customClass }) => {
  const [showMobileNav, setShowMobileNav] = useState(false)
  const mobNavRef = useRef(null)
  const router = useRouter()

  useClickOutside(() => setShowMobileNav(false), mobNavRef)

  useEffect(() => {
    const header = document.querySelector('header')
    const scrollDistance = 200

    const handleScroll = () => {
      const scrollPosition = document.documentElement.scrollTop

      if (scrollPosition >= scrollDistance) header.classList.add(stl.scrolled)
      else header.classList.remove(stl.scrolled)
    }

    document.addEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Home', href: '/#home', id: 'heroSection' },
    { label: 'About', href: '/about-me', id: 'aboutPage' },
    { label: 'Services', href: '/#services', id: 'servicesSection' },
    { label: 'Skills', href: '/#skills', id: 'skillsSection' },
    { label: 'Contact', href: '/contact', id: 'contactSection' },
  ]

  const navMenu = navLinks.map(({ label, href, id }) => (
    <Link key={label} href={href} passHref>
      <a
        onClick={() => {
          scrollToSection(id)
          setShowMobileNav(false)
        }}
        className={clsx(
          stl.hashLink,
          label === 'Home'
            ? (router.asPath === '/' || router.asPath.includes(href)) &&
                stl.active
            : router.asPath.includes(href) && stl.active
        )}
      >
        <span>#</span>
        <span>{label}</span>
      </a>
    </Link>
  ))

  return (
    <header ref={mobNavRef} className={clsx(stl.header, customClass)}>
      <div className={stl.innerHeader}>
        <Link href="/">
          <a className={stl.logo}>
            <Logo />
          </a>
        </Link>

        <div className={stl.navMenu}>{navMenu}</div>

        <button
          onClick={() => setShowMobileNav(!showMobileNav)}
          className={stl.menuTrigger}
        >
          <AppsIcon />
        </button>

        <div
          className={clsx(stl.mobileNav, showMobileNav && stl.showMobileNav)}
        >
          {navMenu}
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  customClass: PropTypes.string,
}

export default Header
