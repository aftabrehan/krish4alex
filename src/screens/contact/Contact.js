import Layout from 'layout'
import { Hero, Contact as ContactSection } from 'sections'

import stl from './Contact.module.scss'

const Contact = () => (
  <Layout>
    <main className={stl.main}>
      <Hero />
      <ContactSection />
    </main>
  </Layout>
)

export default Contact
