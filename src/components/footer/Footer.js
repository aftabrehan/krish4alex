import Link from 'next/link'

import KrishLogo from 'assets/svg/krish.svg'
import GithubIcon from 'assets/svg/github.svg'
import DribbbleIcon from 'assets/svg/dribbble.svg'
import FigmaIcon from 'assets/svg/figma.svg'

import stl from './Footer.module.scss'

const Footer = () => {
  const year = new Date().getFullYear()

  const profileLinks = [
    {
      icon: <GithubIcon />,
      link: 'https://github.com/krish4alex',
    },
    {
      icon: <DribbbleIcon />,
      link: 'https://dribbble.com/krish4alex',
    },
    {
      icon: <FigmaIcon />,
      link: 'https://www.figma.com/@krish4alex',
    },
  ]

  return (
    <footer className={stl.footer}>
      <div className={stl.main}>
        <div className={stl.content}>
          <div className={stl.about}>
            <h6>
              <KrishLogo />
              krish4alex
            </h6>
            <p>Web designer and Application UI Designer! </p>
          </div>

          <div className={stl.media}>
            <h6>Media Profiles</h6>
            <div className={stl.links}>
              {profileLinks.map(({ icon, link }, i) => (
                <Link key={i} href={link}>
                  <a className={stl.link} target="_blank">
                    {icon}
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className={stl.copyRight}>
          © Copyright {year}. Designed by{' '}
          <Link href="http://krish4alex.vercel.app">krish4alex</Link> and
          Developed by{' '}
          <Link href="http://aftabrehan.com">
            <a target="_blank">Aftab Rehan</a>
          </Link>
          .
        </div>
      </div>
    </footer>
  )
}

export default Footer
