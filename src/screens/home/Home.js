import Head from 'next/head'

import Header from 'components/header'
import ProfileLinks from 'components/profile-links'
import { Hero, About, Services, Skills, Projects, Testimonial } from 'sections'
import Footer from 'components/footer'

import stl from './Home.module.scss'

const Home = () => (
  <>
    <Head>
      <title>Top Rated UI/UX Designer - Krish4alex</title>
    </Head>
    <div className={stl.wrapper}>
      <Header />
      <ProfileLinks />
      <Hero />
      <About />
      <Services />
      <Skills />
      <Projects />
      <Testimonial />
    </div>

    <Footer />
  </>
)

export default Home
