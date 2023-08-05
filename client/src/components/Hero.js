import React from 'react';
import Photo from '../assets/pics_for_kuba.png';
import BackgroundCircles from './BackgroundCircles';

function Hero() {

    return (
      <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles />
          <img
          src={Photo}
          className='relative rounded-full h-40 w-40 mx-auto object-cover'
          alt=''
          />
        <div className='z-20'>
          <h2 className='
            text-sm
            uppercase
            pb-2
            tracking-[15px]
          '>
            Architect | Make-up Artist | Designer
          </h2>
          {/* <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
            <span className='text-white z-10'>{text}</span>
            <Cursor cursorColor="white"/>
          </h1> */}
          <div className='pt-5'>
            <a href="#about">
              <button className='heroButton'>About</button>
            </a>
            <a href="#experience">
              <button className='heroButton'>Experience</button>
            </a>
            <a href="#projects">
              <button className='heroButton'>Projects</button>
            </a>
          </div>
        </div>
      </div>
    );
}

export default Hero;