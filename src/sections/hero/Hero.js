import Image from 'next/image'

import Button from 'components/button'

import SendIcon from 'assets/svg/send.svg'

import BlackLine from 'assets/png/black-line.png'
import HeroImage from 'assets/png/hero.png'
import Logo from 'assets/png/logo.png'
import MiniBoxArt from 'assets/png/mini-box-art.png'
import ArrowPointingDown from 'assets/png/arrow-pointing-down.png'

import stl from './Hero.module.scss'

const Hero = () => {
  const currentActivity = 'Portfolio'

  return (
    <section className={stl.section} id="heroSection">
      <div className={stl.main}>
        <div className={stl.left}>
          <div className={stl.logo}>
            <Image src={Logo} alt="logo" />
          </div>
          <h3>
            <span>
              <Image src={BlackLine} alt="black-line" />
            </span>
            <span>User Interface Designer</span>
          </h3>
          <p className={stl.secondaryText}>
            I’m UI/UX designer in lucknow , and I’m very passionate and
            dedicated to my work.
          </p>
          <Button>
            say Hello <SendIcon />
          </Button>
        </div>
        <div className={stl.right}>
          <Image src={HeroImage} alt="hero-image" priority />
          <div className={stl.statusRow}>
            <span className={stl.yellowBox} />
            Currently working on <span>{currentActivity}</span>
          </div>
        </div>
      </div>

      <div className={stl.bottomSection}>
        <div className={stl.upperText}>A Designer who</div>
        <h3 className={stl.mainText}>
          Judges a book by its <span>cover</span>...
        </h3>
        <p className={stl.secondaryText}>
          Because if the cover does not impress you what else can?
        </p>

        <div className={stl.arrowPointingDown}>
          <Image src={ArrowPointingDown} alt="arrow-pointing-down" />
        </div>

        <div className={stl.miniArtBox}>
          <Image src={MiniBoxArt} alt="mini-box-art" />
        </div>
      </div>
    </section>
  )
}

export default Hero
