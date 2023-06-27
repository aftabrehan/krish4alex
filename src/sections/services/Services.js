import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

import WebDesignIcon from 'assets/svg/web-design.svg'
import CodeIcon from 'assets/svg/code.svg'
import BrandDesignIcon from 'assets/svg/brand-design.svg'
import ArrowDotIcon from 'assets/svg/arrow-dot.svg'

import HorizontalOrangeLine from 'assets/png/horizontal-orange-line.png'

import { getCommonMotionProps } from 'lib/utils'

import { scrollToSection } from 'lib/utils'

import stl from './Services.module.scss'

const Services = () => {
  const [animation, setAnimation] = useState(false)

  const motionProps = getCommonMotionProps(animation, setAnimation)

  const services = [
    {
      icon: <WebDesignIcon />,
      label: 'Web',
      link: '#skills',
      id: 'skillsSection',
    },
    {
      icon: <CodeIcon />,
      label: 'UI/Ux',
      link: '#skills',
      id: 'skillsSection',
    },
    {
      icon: <BrandDesignIcon />,
      label: 'Brand',
      link: '#skills',
      id: 'skillsSection',
    },
  ]

  return (
    <section className={stl.section} id="servicesSection">
      <motion.div className={stl.heading} {...motionProps}>
        <h3>
          <span>#</span>Services
        </h3>
        <Image src={HorizontalOrangeLine} alt="horizontal-orange-line" />
      </motion.div>

      <div className={stl.services}>
        {services.map(({ icon, label, link, id }, i) => (
          <Link key={i} href={link}>
            <motion.a
              className={stl.serviceCard}
              onClick={() => scrollToSection(id)}
              {...motionProps}
              transition={{ duration: 0.35, delay: 0.15 + 0.2 * i }}
            >
              {icon}
              <div className={stl.label}>
                <span>{label}</span>
                <span>Designer</span>
              </div>
              <span className={stl.link}>
                Learn More
                <ArrowDotIcon />
              </span>
            </motion.a>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Services
