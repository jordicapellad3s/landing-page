import Head from 'next/head'
import AboutUs from '../components/aboutus'
import ContactUs from '../components/contactus'
import Footer from '../components/footer'
import Masthead from '../components/masthead'
import Skills from '../components/skills'
import TrustedBy from '../components/trustedby'
import Works from '../components/works'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Margelo</title>
        <meta
          name="description"
          content="App development, done right. We will help you ship better apps, faster. Our team of expert engineers has created the best user experiences in some of the most popular apps worldwide. We specialize in app development (from Idea to AppStore), as well as performance optimizations, custom module development and consulting."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Masthead />
      <AboutUs />
      <Skills />
      <Works />
      <TrustedBy />
      <ContactUs />
      <Footer />
    </div>
  )
}
