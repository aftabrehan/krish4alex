import Link from 'next/link'
import PropTypes from 'prop-types'
import clsx from 'clsx'

import GithubIcon from 'assets/svg/github.svg'
import DribbbleIcon from 'assets/svg/dribbble.svg'
import FigmaIcon from 'assets/svg/figma.svg'

import stl from './ProfileLinks.module.scss'

const ProfileLinks = ({ customClass }) => {
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
    <div className={clsx(stl.container, customClass)}>
      <div className={stl.verticalLine} />

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
  )
}

ProfileLinks.propTypes = {
  customClass: PropTypes.string,
}

export default ProfileLinks
