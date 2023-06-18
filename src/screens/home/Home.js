import Head from 'next/head'

import Header from 'components/header'

import stl from './Home.module.scss'

const Home = () => (
  <>
    <Head>
      <title>Top Rated UI/UX Designer - Krish4alex</title>
    </Head>
    <div className={stl.wrapper}>
      <Header />
    </div>
  </>
)

export default Home
