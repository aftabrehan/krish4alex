import { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'

import Button from 'components/button'

import SendIcon from 'assets/svg/send.svg'

import BlackLine from 'assets/png/black-line.png'
import HeroImage from 'assets/png/hero.png'
import MiniBoxArt from 'assets/png/mini-box-art.png'
import TechnologyStack from 'components/technology-stack/Technology'

import { getCommonMotionProps, getScaleMotionProps } from 'lib/utils'

import stl from './Hero.module.scss'

const Hero = ({ showBottomSection }) => {
  const [animation, setAnimation] = useState(false)

  const router = useRouter()

  const motionProps = getCommonMotionProps(animation, setAnimation)
  const motionScaleProps = getScaleMotionProps(animation, setAnimation)

  const currentActivity = 'Portfolio'

  return (
    <section className={stl.section} id="heroSection">
      <div className={stl.main}>
        <div className={stl.left}>
          <motion.div {...motionProps}>
            <p>hi!👋</p>
            <h2>
              I&apos;m <span>Krishna</span> Sharma,
            </h2>
            <span>
              <Image src={BlackLine} alt="black-line" />
            </span>

            <h4>UI/UX Designer</h4>

            <div className={stl.rowAbout}>
              <div>
                <Image
                  alt="Map Icon"
                  src="/technology/map-icon.svg"
                  width={16}
                  height={16}
                />
                <span>Lucknow</span>
              </div>
              <div>
                <Image
                  alt="Email Icon"
                  src="/technology/email-icon.svg"
                  width={16}
                  height={16}
                />
                <span>amitsharma4a3@gmail.com</span>
              </div>
            </div>

            <ul className={stl.aboutSocial}>
              <li id={stl.webs}>
                <Image
                  alt="Website Icon"
                  src="/technology/website.svg"
                  width={16}
                  height={16}
                />
                uix.krish
              </li>
              <li id={stl.linkedin}>
                <Image
                  alt="Linkedin Icon"
                  src="/technology/linkedin.svg"
                  width={16}
                  height={16}
                />
                /uix.krish
              </li>
              <li id={stl.figma}>
                <Image
                  alt="Figma Icon"
                  src="/technology/figmaIcon.svg"
                  width={16}
                  height={16}
                />
                /@uix.krish
              </li>
              <li id={stl.github}>
                <Image
                  alt="GitHub Icon"
                  src="/technology/github.svg"
                  width={16}
                  height={16}
                />
                /uix.krish
              </li>
            </ul>
          </motion.div>

          {showBottomSection && (
            <motion.div
              {...motionProps}
              transition={{ duration: 0.5, delay: 0.3 }}
              className={stl.btnWrapper}
            >
              <Button onClick={() => router.push('/contact')}>
                say Hello <SendIcon />
              </Button>
            </motion.div>
          )}
        </div>

        <motion.div {...motionScaleProps} className={stl.right}>
          <Image src={HeroImage} alt="hero-image" priority />
          <div className={stl.statusRow}>
            <span className={stl.yellowBox} />
            Currently working on <span>{currentActivity}</span>
          </div>
        </motion.div>
      </div>

      <motion.div {...motionProps} transition={{ duration: 0.5, delay: 0.3 }}>
        <TechnologyStack />
      </motion.div>

      {showBottomSection && (
        <div className={stl.bottomSection}>
          <motion.div
            {...motionProps}
            transition={{ duration: 0.5, delay: 0.35 }}
            className={stl.upperText}
          >
            A Designer who
          </motion.div>
          <motion.h3
            {...motionProps}
            transition={{ duration: 0.5, delay: 0.4 }}
            className={stl.mainText}
          >
            Judges a book by its <span>cover</span>...
          </motion.h3>
          <motion.p
            {...motionProps}
            transition={{ duration: 0.5, delay: 0.45 }}
            className={stl.secondaryText}
          >
            Because if the cover does not impress you what else can?
          </motion.p>

          {/* <motion.div {...motionProps} className={stl.arrowPointingDown}>
            <Image src={ArrowPointingDown} alt="arrow-pointing-down" />
          </motion.div> */}

          <motion.div {...motionProps} className={stl.miniArtBox}>
            <Image src={MiniBoxArt} alt="mini-box-art" />
          </motion.div>
        </div>
      )}
    </section>
  )
}

Hero.propTypes = {
  showBottomSection: PropTypes.bool,
}

export default Hero
