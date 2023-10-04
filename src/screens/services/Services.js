import Image from 'next/image'
import { useRouter } from 'next/router'

import Layout from 'layout'
import SkillCard from 'components/skill-card'

import LinesArt from 'assets/svg/lines.svg'

import avatar from 'assets/png/services-avatar.png'
import webDesignTech from 'assets/png/web-design-tech-art.png'
import uiuxDesignTech from 'assets/png/uiux-design-tech-art.png'
import brandDesignTech from 'assets/png/brand-design-tech-art.png'

import stl from './Services.module.scss'

const Services = () => {
  const router = useRouter()
  const { type } = router.query

  const techImage =
    {
      web: webDesignTech,
      'ui/ux': uiuxDesignTech,
      brand: brandDesignTech,
    }[type?.toLowerCase()] || uiuxDesignTech

  const webSkills = [
    {
      title: 'React',
      description:
        'I also use Client First system for class naming structure, which allows me to build any project fast and conveniently.',
    },
    {
      title: 'JavaScript',
      description:
        'I also use Client First system for class naming structure, which allows me to build any project fast and conveniently.',
    },
    {
      title: 'HTML, CSS',
      description:
        'I also use Client First system for class naming structure, which allows me to build any project fast and conveniently.',
    },
  ]

  const uiuxSkills = [
    {
      title: 'Figma',
      description:
        'I also use Client First system for class naming structure, which allows me to build any project fast and conveniently.',
    },
    {
      title: 'Adobe XD',
      description:
        'I also use Client First system for class naming structure, which allows me to build any project fast and conveniently.',
    },
    {
      title: 'Sketch',
      description:
        'I also use Client First system for class naming structure, which allows me to build any project fast and conveniently.',
    },
  ]

  const brandSkills = [
    {
      title: 'Adobe Illustrator',
      description:
        'I also use Client First system for class naming structure, which allows me to build any project fast and conveniently.',
    },
    {
      title: 'Adobe Photoshop',
      description:
        'I also use Client First system for class naming structure, which allows me to build any project fast and conveniently.',
    },
    {
      title: 'Blender',
      description:
        'I also use Client First system for class naming structure, which allows me to build any project fast and conveniently.',
    },
  ]

  const skills =
    {
      web: webSkills,
      'ui/ux': uiuxSkills,
      brand: brandSkills,
    }[type?.toLowerCase()] || []

  return (
    <Layout>
      <LinesArt className={stl.linesArt} />

      <main className={stl.main}>
        <section className={stl.heroSection}>
          <div className={stl.textBox}>
            <h1>
              I&apos;m <span>Krishna Sharma</span>,
            </h1>
            <h2>
              <span>{type}</span> Designer
            </h2>
            <p>
              Agency-quality Web designer with the personal touch of a
              freelancer.
            </p>
          </div>

          <div className={stl.imageBox}>
            <Image src={avatar} alt="avatar" width={800} />
          </div>
        </section>

        <section className={stl.showcaseSection}>
          <div className={stl.imageBox}>
            <Image src={techImage} alt="tech-image" />
          </div>
          <div className={stl.textContainer}>
            <h2>I specialize in</h2>

            <div className={stl.skillsWrapper}>
              {skills.map((skill, i) => (
                <SkillCard key={i} {...skill} index={i + 1} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export default Services
