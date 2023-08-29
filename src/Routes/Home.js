import React from 'react';
import Navber from "../Components/Navber";
import Hero from '../Components/Hero';

function Home() {
  return (
  <>
    <Navber />
    <Hero
      cName='hero'
      heroImg='https://w0.peakpx.com/wallpaper/457/641/HD-wallpaper-digital-painting-lake-landscape-nature-digital-art-lake-landscape-nature-deviantart.jpg'
      title='Your Journey Your Story'
      text='Choose Your Favourite Destination'
      buttonText="Travel Plan"
      btnClass='show'
      url='/'
    />
  </>
  )
}

export default Home
