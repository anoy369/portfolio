import React, { useEffect } from 'react'
import About from './components/about/about'
import Contact from './components/contact/contact'
import Experience from './components/experience/experience'
import Header from './components/header/header'
import Nav from './components/nav/nav'
// import Portfolio from './components/portfolio/portfolio'
import Services from './components/services/services'
import Testimonials from './components/testimonials/testimonials'
import Footer from './components/footer/footer'
import ReactGA from "react-ga"

const TRACKING_ID = "UA-186323648-1"
ReactGA.initialize(TRACKING_ID)

const App = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname)
  }, [])

  return (
    <>
      <Header />
      <Nav />
      <About />
      {/* <Portfolio /> */}
      <Services />
      <Experience />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}

export default App