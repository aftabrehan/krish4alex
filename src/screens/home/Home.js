import Head from 'next/head'

import Header from 'components/header'
import { Hero } from 'sections'

import stl from './Home.module.scss'

const Home = () => (
  <>
    <Head>
      <title>Top Rated UI/UX Designer - Krish4alex</title>
    </Head>
    <div className={stl.wrapper}>
      <Header />
      <Hero />
    </div>
  </>
)

export default Home
