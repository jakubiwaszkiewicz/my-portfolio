import React, { useState, useEffect, Suspense, lazy } from 'react';
import Hero from '../components/Hero';
import About from '../components/About'; 
import WorkExperience from '../components/WorkExperience';
import Projects from '../components/Projects';
import ContactMe from '../components/ContactMe';
import { AiOutlineArrowUp } from 'react-icons/ai'
import Loading from '../components/Loading';


/*
const Hero =  lazy(() => import('../components/Hero'));
const About =  lazy(() => import('../components/About'));
const WorkExperience =  lazy(() => import('../components/WorkExperience'));
const Projects =  lazy(() => import('../components/Projects'));
const ContactMe =  lazy(() => import('../components/ContactMe'));




*/

const API_ABOUT_URL = 'http://localhost:3001/api/about-data';
const API_EXP_URL = 'http://localhost:3001/api/experiences-data';

function Home({ data, dataExperience }) {

  let [ aboutData, setAboutData ] = useState('')
  let [ expData, setExpData ] = useState([])

  let [loadingAPI , setLoadingAPI] = useState([true, true, true])

  useEffect(() => {
    const dataFetchAbout = async () => {
      const data = await (
        await fetch (API_ABOUT_URL)
      ).json();

      // set state when the data received
      setAboutData(data.data.attributes);
    };
    dataFetchAbout().then(setLoadingAPI([false, loadingAPI[1]]));
    
  }, []);

  useEffect(() => {
    fetch(API_EXP_URL)
      .then((res) => res.json())
      .then((data) => setExpData(data.data))
      .then(setLoadingAPI([loadingAPI[0], false]))
  }, []);

  return (
    <div>
        <section id="hero" className="snap-start">
          <Hero
            photo={aboutData.photo1}
            name={aboutData.name}
          />
        </section>

        {/* {About} */}
        <section id="about" className="snap-center">
          <About
            photo={aboutData.photo2}
            desc={aboutData.description}
          />
        </section>

        {/* {Experience} */}
        <section id="experience" className="snap-center">
          <WorkExperience
            experiences={expData}
          />
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
                className="w-10 h-10 filter hover:text-[#D71E75] transtion-hover duration-300"
              />
            </a>
          </div>
        </div>
    </div>
  );
}

export default Home;
