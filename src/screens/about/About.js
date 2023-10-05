import { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'

import Layout from 'layout'
import Button from 'components/button'

import SendIcon from 'assets/svg/send.svg'

import Avatar from 'assets/png/avatar.png'
import MiniBoxArt from 'assets/png/mini-box-art.png'
import ArrowDown from 'assets/png/arrow-down.png'

import { getCommonMotionProps, getScaleMotionProps } from 'lib/utils'

import stl from './About.module.scss'

const About = () => {
  const [animation, setAnimation] = useState(false)

  const router = useRouter()

  const motionProps = getCommonMotionProps(animation, setAnimation)
  const motionScaleProps = getScaleMotionProps(animation, setAnimation)

  return (
    <Layout>
      <main className={stl.main}>
        <section className={stl.heroSection}>
          <div className={stl.avatarRow}>
            <motion.div className={stl.helloBox} {...motionProps}>
              <div className={stl.arrowDown}>
                <Image src={ArrowDown} alt="arrow-down" />
              </div>

              <p>
                Hello! I Am <span>Krish4alex</span>
              </p>
            </motion.div>

            <motion.div className={stl.imageBox} {...motionScaleProps}>
              <Image src={Avatar} alt="avatar" priority />
            </motion.div>

            <div className={stl.mainInfo}>
              <motion.div
                className={stl.upperText}
                {...motionProps}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                A Designer who
              </motion.div>
              <motion.h3
                {...motionProps}
                transition={{ duration: 0.5, delay: 0.25 }}
                className={stl.mainText}
              >
                Judges a book by its <span>cover</span>...
              </motion.h3>
              <motion.p
                {...motionProps}
                transition={{ duration: 0.5, delay: 0.3 }}
                className={stl.secondaryText}
              >
                Because if the cover does not impress you what else can?
              </motion.p>
            </div>

            <motion.div
              {...motionProps}
              transition={{ duration: 0.5, delay: 0.35 }}
              className={stl.miniArtBox}
            >
              <Image src={MiniBoxArt} alt="mini-box-art" />
            </motion.div>
          </div>

          <div className={stl.headline}>
            <motion.h3
              {...motionProps}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              I&apos;m a Graphic Designer (Ui/UX)!
            </motion.h3>
            <motion.h4
              {...motionProps}
              transition={{ duration: 0.5, delay: 0.45 }}
            >
              Currently, I&apos;m a User Experience Designer.
            </motion.h4>
          </div>
        </section>

        <section className={stl.aboutSection}>
          <motion.h3
            {...motionProps}
            transition={{ duration: 0.5, delay: 0.45 }}
          >
            About Me!
          </motion.h3>

          <motion.p {...motionProps} transition={{ duration: 0.5, delay: 0.5 }}>
            With over a year of experience as a self-taught UI/UX designer, I
            create meaningful and visually stunning digital products that strike
            a balance between user needs and business goals. My background in
            design and development enables me to craft intuitive and engaging
            interfaces that are both aesthetically pleasing and user-friendly.
          </motion.p>

          <motion.h3
            {...motionProps}
            transition={{ duration: 0.5, delay: 0.55 }}
          >
            My expertise includes:
          </motion.h3>

          <motion.p {...motionProps} transition={{ duration: 0.5, delay: 0.6 }}>
            I design and develop responsive web and mobile applications. I
            create wireframes, prototypes, and user flows to communicate design
            ideas effectively. I conduct user research and testing for optimal
            user experience. I collaborate with cross-functional teams and apply
            user-centered design principles. I stay updated on the latest design
            trends and technologies. I have experience with various design tools
            and front-end development frameworks. I&apos;m a creative
            problem-solver, always seeking innovative approaches. I thrive in
            collaborative environments and deliver high-quality work. Let&apos;s
            create something amazing together!
          </motion.p>

          <Button onClick={() => router.push('/contact')}>
            Hire Me <SendIcon />
          </Button>
        </section>
      </main>
    </Layout>
  )
}

export default About
