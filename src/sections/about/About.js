import { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'

import Button from 'components/button'

import MedalIcon from 'assets/svg/medal.svg'
import CloudDoneIcon from 'assets/svg/cloud-done.svg'
import HeadPhoneIcon from 'assets/svg/headphone.svg'
import PageIcon from 'assets/svg/page.svg'
import ForwardIcon from 'assets/svg/forward.svg'

import HorizontalOrangeLine from 'assets/png/horizontal-orange-line.png'
import AboutArt from 'assets/png/about-art.png'
import DotsArt from 'assets/png/dots-art.png'
import MiniBoxArt from 'assets/png/mini-box-art.png'

import { getCommonMotionProps, getScaleMotionProps } from 'lib/utils'

import stl from './About.module.scss'

const About = () => {
  const [animation, setAnimation] = useState(false)

  const router = useRouter()

  const motionProps = getCommonMotionProps(animation, setAnimation)
  const motionScaleProps = getScaleMotionProps(animation, setAnimation)

  const features = [
    {
      icon: <MedalIcon />,
      title: 'Experience',
      subTitle: '1+ years',
    },
    {
      icon: <CloudDoneIcon />,
      title: 'Completed',
      subTitle: '10+ projects',
    },
    {
      icon: <HeadPhoneIcon />,
      title: 'Supports',
      subTitle: 'Online 24/7',
    },
  ]

  return (
    <section className={stl.section} id="aboutSection">
      <motion.div className={stl.heading} {...motionProps}>
        <h3>
          <span>#</span>About Me
        </h3>
        <Image src={HorizontalOrangeLine} alt="horizontal-orange-line" />
      </motion.div>

      <div className={stl.main}>
        <motion.div {...motionScaleProps} className={stl.left}>
          <div className={stl.aboutArt}>
            <Image src={AboutArt} alt="about-art" priority />
          </div>
          <div className={stl.statusRow}>
            <span className={stl.greenBox} />
            <p>
              Hi, I’m Krishna Sharma (UI/UX Designer) functioning in the
              industry for 1+ years now. I make meaningful and delightful
              digital products that create a equilibrium between user needs and
              business goals.
            </p>
          </div>
        </motion.div>

        <div className={stl.right}>
          <div className={stl.features}>
            {features.map(({ icon, title, subTitle }, i) => (
              <motion.div
                key={i}
                className={stl.feature}
                {...motionProps}
                transition={{ duration: 0.5, delay: 0.25 + i * 0.1 }}
              >
                {icon}
                <div>{title}</div>
                <span>{subTitle}</span>
              </motion.div>
            ))}

            <div className={stl.dotsArt}>
              <Image src={DotsArt} alt="dots-art" width={54} height={54} />
            </div>

            <div className={stl.miniBoxArt}>
              <Image
                src={MiniBoxArt}
                alt="mini-box-art"
                width={54}
                height={54}
              />
            </div>
          </div>

          <motion.div
            {...motionProps}
            transition={{ duration: 0.5, delay: 0.45 }}
            className={stl.about}
          >
            <h4>Hello, I&apos;m Krish4alex!</h4>
            <p>
              A self-taught UI/UX designer, functioning in the industry for 1+
              years now. I make meaningful and delightful digital products that
              create a equilibrium between user needs and business goals.
            </p>
          </motion.div>

          <motion.div
            {...motionProps}
            transition={{ duration: 0.5, delay: 0.5 }}
            className={stl.btnWrapper}
          >
            <Button
              onClick={() =>
                window.open(
                  'https://drive.google.com/file/d/1hHyN_GqHYQxoMq_MppTH9ceUw-z9ftJq/view?usp=drive_link',
                  '_blank'
                )
              }
            >
              Download CV
              <PageIcon />
            </Button>

            <Button
              onClick={() => router.push('/about-me')}
              variant="secondary"
            >
              Read More
              <ForwardIcon />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
