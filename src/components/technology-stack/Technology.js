import React from 'react'
import Image from 'next/image'

import style from './Technology.module.scss'

const technologies = [
  { id: 1, name: 'Adobe' },
  { id: 2, name: 'Discord' },
  { id: 3, name: 'Framer' },
  { id: 4, name: 'figma' },
  { id: 5, name: 'Invision' },
  { id: 6, name: 'Notion' },
  { id: 7, name: 'slack' },
  { id: 8, name: 'Medium' },
  { id: 9, name: 'Miro' },
  { id: 10, name: 'Dribbble' },
]

const TechnologyStack = () => (
  <div className={style.main_wrapper}>
    <div className={style.carousel_wrapper}>
      <div className={style.carousel}>
        {technologies.concat(technologies).map((tech, index) => (
          <div className={style.item} key={index}>
            <Image
              src={`/technology/${tech.name}.svg`}
              alt={tech.name}
              width={86}
              height={32}
            />
          </div>
        ))}
      </div>
    </div>
  </div>
)

export default TechnologyStack
