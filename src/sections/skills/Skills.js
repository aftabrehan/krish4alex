import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

import HorizontalOrangeLine from 'assets/png/horizontal-orange-line.png'
import SkillsArt from 'assets/png/skills-art.png'
import DotsArt from 'assets/png/dots-art.png'
import MiniBoxArt from 'assets/png/mini-box-art.png'

import { getCommonMotionProps, getScaleMotionProps } from 'lib/utils'

import stl from './Skills.module.scss'

const Skills = () => {
  const [animation, setAnimation] = useState(false)

  const motionProps = getCommonMotionProps(animation, setAnimation)
  const motionScaleProps = getScaleMotionProps(animation, setAnimation)

  const skillsList = [
    {
      heading: 'Languages',
      skills: ['TypeScript', 'Lua', 'Python', 'JavaScript'],
    },
    {
      heading: 'Databases',
      skills: ['SQLite', 'PostgreSQL', 'Mongo'],
    },
    {
      heading: 'Tools',
      skills: ['Photoshop', 'Skate', 'Sketch', 'Figma', 'XD', 'Illustration'],
    },
    {
      heading: 'Other',
      skills: ['HTML', 'CSS', 'EJS'],
    },
  ]

  return (
    <section className={stl.section} id="skillsSection">
      <motion.div className={stl.heading} {...motionProps}>
        <h3>
          <span>#</span>Skills
        </h3>
        <Image src={HorizontalOrangeLine} alt="horizontal-orange-line" />
      </motion.div>

      <div className={stl.content}>
        <motion.div className={stl.left} {...motionScaleProps}>
          <Image src={SkillsArt} alt="skills-art" />
        </motion.div>

        <div className={stl.right}>
          {skillsList.map(({ heading, skills }, i) => (
            <motion.div
              key={i}
              {...motionProps}
              transition={{ duration: 0.5, delay: 0.2 + 0.1 * i }}
              className={stl.table}
            >
              <div className={stl.head}>{heading}</div>

              <div className={stl.divider} />

              <div className={stl.skills}>
                {skills.map(skill => (
                  <div key={skill} className={stl.skill}>
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}

          <div className={stl.dotsArt}>
            <Image src={DotsArt} alt="dots-art" width={72} height={72} />
          </div>

          <div className={stl.miniBoxArt}>
            <Image src={MiniBoxArt} alt="mini-box-art" width={72} height={72} />
          </div>

          <div className={stl.miniBoxArt}>
            <Image src={MiniBoxArt} alt="mini-box-art" width={72} height={72} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
