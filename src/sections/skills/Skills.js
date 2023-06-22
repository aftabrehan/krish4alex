import Image from 'next/image'

import HorizontalOrangeLine from 'assets/png/horizontal-orange-line.png'
import SkillsArt from 'assets/png/skills-art.png'
import DotsArt from 'assets/png/dots-art.png'
import MiniBoxArt from 'assets/png/mini-box-art.png'

import stl from './Skills.module.scss'

const Skills = () => {
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
      <div className={stl.heading}>
        <h3>
          <span>#</span>Skills
        </h3>
        <Image src={HorizontalOrangeLine} alt="horizontal-orange-line" />
      </div>

      <div className={stl.content}>
        <div className={stl.left}>
          <Image src={SkillsArt} alt="skills-art" />
        </div>

        <div className={stl.right}>
          {skillsList.map(({ heading, skills }, i) => (
            <div key={i} className={stl.table}>
              <div className={stl.head}>{heading}</div>

              <div className={stl.divider} />

              <div className={stl.skills}>
                {skills.map(skill => (
                  <div key={skill} className={stl.skill}>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
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
