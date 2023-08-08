import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero'; 
import About from '../components/About'; 
import WorkExperience from '../components/WorkExperience';
import Projects from '../components/Projects';
import ContactMe from '../components/ContactMe';
import Footer from '../components/Footer';
import { AiOutlineArrowUp } from 'react-icons/ai'
import bgImage from '../assets/bg.png';


function Home() {
  // const classNameString =`
  //   text-white
  //   h-screen
  //   snap-y
  //   overflow-y-scroll
  //   overflow-x-hidden
  //   snap-mandatory
  //   z-0 scrollbar
  //   scrollbar-track-gray-400/20
  //   scrollbar-thumb-[#aa4a44]/80
  //   scroll-smooth
  // `;

  // const appStyles = {
  //   background: `url(${bgImage})`,
  //   backgroundSize: 'cover',
  //   backgroundRepeat: 'no-repeat',
  //   backgroundPosition: 'center',
  //   backgroundAttachment: 'fixed',
  // };


  return (
    <div
    >
        

        {/* {Hero} */}
        <section id="hero" className="snap-start">
          <Hero/>
        </section>

        {/* {About} */}
        <section id="about" className="snap-center">
          <About/>
        </section>

        {/* {Experience} */}
        <section id="experience" className="snap-center">
          <WorkExperience/>
        </section>

        {/* {Projects} */}
        <section id="projects" className="snap-start">
          <Projects/>
        </section>

        {/* {Contact Me} */}
        <section id="contact" className="snap-start">
          <ContactMe/>
        </section>
        
          <div className="sticky bottom-5 w-full">
            <div className="flex items-center justify-end mr-10">
              <a href="#hero" className='cursor-pointer'>
                <AiOutlineArrowUp
                  className="w-10 h-10 filter hover:text-[#aa4a44] transtion-hover duration-300"
                />
              </a>
            </div>
          </div>
        


    </div>
  );
}

export default Home;
