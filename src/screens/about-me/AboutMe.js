import Image from 'next/image'

import Layout from 'layout'

import Avatar from 'assets/png/avatar.png'
import MiniBoxArt from 'assets/png/mini-box-art.png'
import ArrowDown from 'assets/png/arrow-down.png'

import stl from './AboutMe.module.scss'

const AboutMe = () => (
  <Layout>
    <main className={stl.main}>
      <section className={stl.heroSection}>
        <div className={stl.avatarRow}>
          <div className={stl.helloBox}>
            <div className={stl.arrowDown}>
              <Image src={ArrowDown} alt="arrow-down" />
            </div>

            <p>
              Hello! I Am <span>Krish4alex</span>
            </p>
          </div>

          <div className={stl.imageBox}>
            <Image src={Avatar} alt="avatar" priority />
          </div>

          <div className={stl.mainInfo}>
            <div className={stl.upperText}>A Designer who</div>
            <h3 className={stl.mainText}>
              Judges a book by its <span>cover</span>...
            </h3>
            <p className={stl.secondaryText}>
              Because if the cover does not impress you what else can?
            </p>

            {/* <div className={stl.arrowPointingDown}>
              <Image src={ArrowPointingDown} alt="arrow-pointing-down" />
            </div> */}

            <div className={stl.miniArtBox}>
              <Image src={MiniBoxArt} alt="mini-box-art" />
            </div>
          </div>
        </div>

        <div className={stl.headline}>
          <h3>I&apos;m a Graphic Designer (Ui/UX)!</h3>
          <h4>Currently, I&apos;m a User Experience Designer.</h4>
        </div>
      </section>
    </main>
  </Layout>
)

export default AboutMe
