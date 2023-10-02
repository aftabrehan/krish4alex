import Image from 'next/image'
import { useRouter } from 'next/router'

import Layout from 'layout'

import LinesArt from 'assets/svg/lines.svg'

import avatar from 'assets/png/services-avatar.png'

import stl from './Services.module.scss'

const Services = () => {
  const router = useRouter()
  const { type } = router.query

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
            <Image src={avatar} alt="text" />
          </div>
        </section>

        <section className={stl.aboutSection}></section>
      </main>
    </Layout>
  )
}

export default Services
