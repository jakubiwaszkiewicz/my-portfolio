import Hero from '../components/Hero'; 
import About from '../components/About'; 
import WorkExperience from '../components/WorkExperience';
import Projects from '../components/Projects';
import ContactMe from '../components/ContactMe';
import { AiOutlineArrowUp } from 'react-icons/ai'

function Home({ data }) {

  return (
    <div>
        {/* {Hero} */}
        <section id="hero" className="snap-start">
          <Hero
            photo={data.photo1}
            name={data.name}
          />
        </section>

        {/* {About} */}
        <section id="about" className="snap-center">
          <About
            photo={data.photo2}
            desc={data.description}
          />
        </section>

        {/* {Experience} */}
        <section id="experience" className="snap-center">
          <WorkExperience
            experience={data.experience}
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
