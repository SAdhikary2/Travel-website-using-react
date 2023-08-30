import React from "react";
import Navber from "../Components/Navber";
import Hero from "../Components/Hero";
import HomeImg from '../assets/12.jpg'
import Destination from "../Components/Destination";
import Trip from "../Components/Trip";
import Footer from "../Components/Footer";

function Home() {
  return (
    <>
      <Navber />
      <Hero
        cName="hero"
        // heroImg="https://w0.peakpx.com/wallpaper/457/641/HD-wallpaper-digital-painting-lake-landscape-nature-digital-art-lake-landscape-nature-deviantart.jpg"
        heroImg={HomeImg}
        title="Your Journey Your Story"
        text="Choose Your Favourite Destination"
        buttonText="Travel Plan"
        btnClass="show"
        url="/"
      />
      <Destination/>
      <Trip/>
      <Footer/>
    </>
  );
}

export default Home;
