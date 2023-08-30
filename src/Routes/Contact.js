import React from 'react'
import Navber from '../Components/Navber'
import Hero from '../Components/Hero'
import Image from '../assets/2.jpg'
import Footer from '../Components/Footer'
import Cfrom from '../Components/contacrForm'

function Contact() {
  return (
    <div>
      <Navber />
        <Hero
          cName="hero-mid"
          heroImg={Image}
          // title="Contact" 
          // text="Choose Your Favourite Destination"
          // buttonText="Travel Plan"
          btnClass="hide"
          
        />

        <Cfrom/>
        <Footer/>
    </div>
  )
}

export default Contact
