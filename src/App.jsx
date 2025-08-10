import { useState } from 'react'


import './App.css'
import NavBar from './Components/NavBar.jsx'
import Hero_text from './Components/Hero_text.jsx'
import video from './assets/half.mp4'
import video2 from './assets/second.mp4'
import Second from './Components/Second.jsx'
import Footer from './Components/Footer.jsx'
import Fourth from './Components/Fourth.jsx'
import Third from './Components/Third.jsx'
import Logo from './assets/Logo.png'

export default function App() {
  return (
    <>
      {/* Video Background - Responsive with dark gradient overlay */}
      
      <div className="absolute  w-screen h-screen  overflow-x-hidden overscroll-x-none max-w-screen ">
     
        {/* Desktop: Split screen, Mobile: Single video */}
        <div className="hidden md:flex h-full ">
          {/* Left half - video */}
          <div className="relative w-1/2 h-full overflow-hidden max-w-screen">
            <video
              className="absolute top-0 left-0 w-full h-full object-cover overflow-x-hidden max-w-screen"
              src={video}
              autoPlay
              loop
              muted
              playsInline
            ></video>
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/40 max-w-screen"></div>
          </div>
          {/* Right half - video */}
          <div className="relative w-1/2 h-full ">
            <video
              className="absolute top-0 left-0 w-full h-full object-cover overflow-x-clip max-w-screen"
              src={video2}
              autoPlay
              loop
              muted
              playsInline
            ></video>
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/40"></div>
          </div>
        </div>
        
        {/* Mobile: Single video */}
        <div className="md:hidden relative w-full h-full ">
          <video
            className="absolute top-0 left-0 w-full h-full object-cover "
            src={video}
            autoPlay
            loop
            muted
            playsInline
          ></video>
          {/* Dark gradient overlay for mobile */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50"></div>
        </div>
      </div>
      
      {/* Navigation - Restore original positioning */}
      <div className="absolute flex  z-50  ">
        <img src={Logo} class="h-12 w-28 mt-12 ml-8 hidden md:block"/>
        <div class="ml-[10%] 2xl:ml-[40%]">
        <NavBar/>
        </div>
      </div>
      
      {/* Hero Section - Restore original positioning */}
      <div className="absolute mt-10 z-10 ">
        <Hero_text/>
      </div>
      {/* Second page starts from here */}
      <Second/>
      <Third/>

      <Fourth/>
      {/* Footer page starts from here */}
      <Footer/>
        
    </>
  );
}


