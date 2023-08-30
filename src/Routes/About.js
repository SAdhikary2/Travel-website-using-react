import React from 'react'
import Navber from '../Components/Navber'
import Hero from '../Components/Hero'
import AboutImage from '../assets/night.jpg'
import Footer from '../Components/Footer'

function About() {
  return (
    
      <>
        <Navber />
        <Hero
          cName="hero-mid"
          heroImg={AboutImage}
          title="About"
          // text="Choose Your Favourite Destination"
          // buttonText="Travel Plan"
          btnClass="hide"
          
        />
        <Footer/>
      </>
  )
}

export default About
