import Image from 'next/image'

import Layout from 'layout'
import Button from 'components/button'

import SendIcon from 'assets/svg/send.svg'

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
          </div>

          <div className={stl.miniArtBox}>
            <Image src={MiniBoxArt} alt="mini-box-art" />
          </div>
        </div>

        <div className={stl.headline}>
          <h3>I&apos;m a Graphic Designer (Ui/UX)!</h3>
          <h4>Currently, I&apos;m a User Experience Designer.</h4>
        </div>
      </section>

      <section className={stl.aboutMeSection}>
        <h3>About Me!</h3>

        <p>
          With over a year of experience as a self-taught UI/UX designer, I
          create meaningful and visually stunning digital products that strike a
          balance between user needs and business goals. My background in design
          and development enables me to craft intuitive and engaging interfaces
          that are both aesthetically pleasing and user-friendly.
        </p>

        <h3>My expertise includes:</h3>

        <p>
          I design and develop responsive web and mobile applications. I create
          wireframes, prototypes, and user flows to communicate design ideas
          effectively. I conduct user research and testing for optimal user
          experience. I collaborate with cross-functional teams and apply
          user-centered design principles. I stay updated on the latest design
          trends and technologies. I have experience with various design tools
          and front-end development frameworks. I&apos;m a creative
          problem-solver, always seeking innovative approaches. I thrive in
          collaborative environments and deliver high-quality work. Let&apos;s
          create something amazing together!
        </p>

        <Button>
          Hire Me <SendIcon />
        </Button>
      </section>
    </main>
  </Layout>
)

export default AboutMe
