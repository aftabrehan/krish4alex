import Image from 'next/image'
import { useRouter } from 'next/router'

import Layout from 'layout'

import LinesArt from 'assets/svg/lines.svg'

import avatar from 'assets/png/services-avatar.png'
import webDesignTech from 'assets/png/web-design-tech-art.png'
import uiuxDesignTech from 'assets/png/uiux-design-tech-art.png'
import brandDesignTech from 'assets/png/brand-design-tech-art.png'

import stl from './Services.module.scss'

const Services = () => {
  const router = useRouter()
  const { type } = router.query

  const techImage = {
    web: webDesignTech,
    'ui/ux': uiuxDesignTech,
    brand: brandDesignTech,
  }[type?.toLowerCase()]

  return (
    <Layout>
      <LinesArt className={stl.linesArt} />

      <main className={stl.main}>
        <section className={stl.heroSection}>
          <div className={stl.textBox}>
            <h1>
              I&apos;m <span>Krishna Sharma</span>,
            </h1>
            <h2>
              <span>{type}</span> Designer
            </h2>
            <p>
              Agency-quality Web designer with the personal touch of a
              freelancer.
            </p>
          </div>

          <div className={stl.imageBox}>
            <Image src={avatar} alt="avatar" />
          </div>
        </section>

        <section className={stl.showcase}>
          <div className={stl.imageBox}>
            <Image src={techImage} alt="tech-image" />
          </div>
          <div className={stl.textContainer}>
            <h2>I specialize in</h2>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export default Services
