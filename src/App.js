import React from 'react'
import {Header, Navbar,About, Experience, Services, Portfolio, Testimonials, Contact, Footer } from './components/index'


const App = () => {
  return (
    <>
    <Header />
    <Navbar />
    <About />
    <Experience />
    {/* <Services /> */}
    <Portfolio />
    <Testimonials />
    <Contact />
    <Footer />
    </>
  )
}

export default App