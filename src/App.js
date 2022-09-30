import React from 'react'
import {Header, Navbar,About, Experience, Portfolio, References, Contact, Footer } from './components/index'


const App = () => {
  return (
    <>
    <Header />
    <Navbar />
    <About />
    <Experience />
    {/* <Services /> */}
    <Portfolio />
    <References />
    <Contact />
    <Footer />
    </>
  )
}

export default App