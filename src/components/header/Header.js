import { useState, useRef } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import Logo from 'assets/svg/logo.svg'
import AppsIcon from 'assets/svg/apps.svg'

import { useClickOutside } from 'lib/hooks'

import stl from './Header.module.scss'

const Header = ({ customClass }) => {
  const [showMobileNav, setShowMobileNav] = useState(false)
  const mobNavRef = useRef(null)
  const router = useRouter()

  useClickOutside(() => setShowMobileNav(false), mobNavRef)

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ]

  const navMenu = navLinks.map(({ label, href }) => (
    <Link key={label} href={href} passHref>
      <a
        onClick={() => setShowMobileNav(false)}
        className={clsx(
          stl.hashLink,
          label === 'Home'
            ? router.asPath === '/' && stl.active
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

      <div className={clsx(stl.mobileNav, showMobileNav && stl.showMobileNav)}>
        {navMenu}
      </div>
    </header>
  )
}

Header.propTypes = {
  customClass: PropTypes.string,
}

export default Header
