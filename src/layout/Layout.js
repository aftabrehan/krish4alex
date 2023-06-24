import Head from 'next/head'

import Header from 'components/header'
import ProfileLinks from 'components/profile-links'
import Footer from 'components/footer'

import stl from './Layout.module.scss'

const Layout = ({ children }) => (
  <>
    <Head>
      <title>Top Rated UI/UX Designer - Krish4alex</title>
    </Head>
    <div className={stl.wrapper}>
      <Header />
      <ProfileLinks />
      {children}
    </div>

    <Footer />
  </>
)

export default Layout
