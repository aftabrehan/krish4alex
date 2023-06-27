import { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'

import Button from 'components/button'

import SendIcon from 'assets/svg/send.svg'

import BlackLine from 'assets/png/black-line.png'
import HeroImage from 'assets/png/hero.png'
import Logo from 'assets/png/logo.png'
import MiniBoxArt from 'assets/png/mini-box-art.png'
import ArrowPointingDown from 'assets/png/arrow-pointing-down.png'

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
          <motion.div className={stl.logo} {...motionProps}>
            <Image src={Logo} alt="logo" />
          </motion.div>
          <motion.h3
            {...motionProps}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span>
              <Image src={BlackLine} alt="black-line" />
            </span>
            <span>User Interface Designer</span>
          </motion.h3>
          <motion.p
            {...motionProps}
            transition={{ duration: 0.5, delay: 0.25 }}
            className={stl.secondaryText}
          >
            I’m UI/UX designer in lucknow , and I’m very passionate and
            dedicated to my work.
          </motion.p>
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

          <motion.div {...motionProps} className={stl.arrowPointingDown}>
            <Image src={ArrowPointingDown} alt="arrow-pointing-down" />
          </motion.div>

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
