import Image from 'next/image'
import Link from 'next/link'

import WebDesignIcon from 'assets/svg/web-design.svg'
import CodeIcon from 'assets/svg/code.svg'
import BrandDesignIcon from 'assets/svg/brand-design.svg'
import ArrowDotIcon from 'assets/svg/arrow-dot.svg'

import HorizontalOrangeLine from 'assets/png/horizontal-orange-line.png'

import { scrollToSection } from 'lib/utils'

import stl from './Services.module.scss'

const Services = () => {
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
      <div className={stl.heading}>
        <h3>
          <span>#</span>Services
        </h3>
        <Image src={HorizontalOrangeLine} alt="horizontal-orange-line" />
      </div>

      <div className={stl.services}>
        {services.map(({ icon, label, link, id }, i) => (
          <Link key={i} href={link}>
            <a onClick={() => scrollToSection(id)} className={stl.serviceCard}>
              {icon}
              <div className={stl.label}>
                <span>{label}</span>
                <span>Designer</span>
              </div>
              <span className={stl.link}>
                Learn More
                <ArrowDotIcon />
              </span>
            </a>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Services
