import React from 'react'
import Navber from '../Components/Navber'
import Hero from '../Components/Hero'
import AboutImage from '../assets/9.jpg'
import Footer from '../Components/Footer'
import Trip from '../Components/Trip'

function Service() {
  return (
    <div>
    <Navber />
        <Hero
          cName="hero-mid"
          heroImg={AboutImage}
          // title="Service"
          // text="Choose Your Favourite Destination"
          // buttonText="Travel Plan"
          btnClass="hide"
          
        />

        <Trip/>

        <Footer/>
    </div>
  )
}

export default Service
