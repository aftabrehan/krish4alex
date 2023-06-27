import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

import PreviewIcon from 'assets/svg/preview.svg'
import HorizontalOrangeLine from 'assets/png/horizontal-orange-line.png'

import { getCommonMotionProps } from 'lib/utils'

import stl from './Projects.module.scss'

const Projects = () => {
  const [animation, setAnimation] = useState(false)

  const motionProps = getCommonMotionProps(animation, setAnimation)

  const projects = [
    {
      thumbnailPath: '/assets/png/projects/real-estate.png',
      skill: 'Ui/Ux design & Assest',
      title: 'Real Estate',
      description:
        'The extensive real estate mobile app features over 170 screens...',
      projectLink: 'https://www.figma.com/community/file/1189554935999340910',
    },
    {
      thumbnailPath: '/assets/png/projects/global-thinking.png',
      skill: 'Figma/PhotoShop',
      title: 'Global Thinking',
      description:
        'You can get everything in life you want if you will just help...',
      projectLink:
        'https://www.figma.com/community/file/1213456791237335485/The-Global-thinking',
    },
    {
      thumbnailPath: '/assets/png/projects/fitUS.png',
      skill: 'Figma',
      title: 'Fitness App',
      description:
        'The 90+ screen fitness mobile app offers a complete solution...',
      projectLink:
        'https://www.figma.com/community/file/1188072280097784359/fitness-App',
    },
  ]

  return (
    <section className={stl.section} id="projectsSection">
      <div className={stl.head}>
        <motion.div className={stl.heading} {...motionProps}>
          <h3>
            <span>#</span>Projects
          </h3>
          <Image src={HorizontalOrangeLine} alt="horizontal-orange-line" />
        </motion.div>

        <Link href="https://www.figma.com/@krish4alex">
          <a className={stl.viewAllBtn} target="_blank">
            View all ~~&gt;
          </a>
        </Link>
      </div>

      <div className={stl.projects}>
        {projects.map(
          ({ thumbnailPath, title, skill, description, projectLink }, i) => (
            <motion.div
              key={i}
              className={stl.card}
              {...motionProps}
              transition={{ duration: 0.5, delay: 0.15 + 0.2 * i }}
            >
              <div className={stl.imageBox}>
                <Image
                  src={thumbnailPath}
                  alt={title}
                  width={350}
                  height={200}
                />
              </div>

              <div className={stl.metaBox}>
                <span className={stl.skill}>{skill}</span>

                <div className={stl.divider} />

                <h4 className={stl.title}>{title}</h4>

                <p className={stl.description}>{description}</p>

                <Link href={projectLink}>
                  <a className={stl.linkBtn} target="_blank">
                    Preview <PreviewIcon />
                  </a>
                </Link>
              </div>
            </motion.div>
          )
        )}
      </div>
    </section>
  )
}

export default Projects
