import Image from 'next/image'
import Link from 'next/link'

import WebDesignIcon from 'assets/svg/web-design.svg'
import CodeIcon from 'assets/svg/code.svg'
import BrandDesignIcon from 'assets/svg/brand-design.svg'
import ArrowDotIcon from 'assets/svg/arrow-dot.svg'

import HorizontalOrangeLine from 'assets/png/horizontal-orange-line.png'

import stl from './Services.module.scss'

const Services = () => {
  const services = [
    {
      icon: <WebDesignIcon />,
      label: 'Web',
      link: '#skills',
    },
    {
      icon: <CodeIcon />,
      label: 'UI/Ux',
      link: '#skills',
    },
    {
      icon: <BrandDesignIcon />,
      label: 'Brand',
      link: '#skills',
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
        {services.map(({ icon, label, link }, i) => (
          <div key={i} className={stl.service}>
            {icon}
            <div className={stl.label}>
              <span>{label}</span>
              <span>Designer</span>
            </div>
            <Link href={link} className={stl.link}>
              <a className={stl.link}>
                Learn More
                <ArrowDotIcon />
              </a>
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Services
