import React from 'react';
import { motion } from 'framer-motion';
import photo from '../assets/pics_for_kuba.png';

function About() {
    return (
        <motion.div
        initial={{
            opacity: 0,
        }}
        whileInView={{
            opacity: 1,
        }}
        transition={{
            duration: 1,
        }}
        className='flex flex-col relative h-screen text-center md:text:left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'
    >
        {/* <h3 className='sectionTitle'>About</h3> */}
        <motion.img
            src={photo}
            initial={{
                x: -200,
                opacity: 0,
            }}
            whileInView={{
                x: 0,
                opacity: 1,
            }}
            transition={{
                duration: 0.5,
            }}
            viewport={{ once: true }}
            className='
                -mb-20
                md:mb-0
                w-30
                h-30
                rounded-full
                object-cover
                md:rounded-lg
                md:w-64
                md:h-95
                xl:w-[450px]
                xl:h-[500px]'
        />

        <motion.div
            initial={{
                opacity: 0,
            }}
            whileInView={{
                opacity: 1,
            }}
            transition={{
                duration: 1,
            }}
            className='space-y-10 px-0 md:px-10'
        >
            <h4 className="text-4xl font-semibold">
                Hello <span className='underline decoration-[#D71E75]/80 tracking-widest underline-offset-8'>there!</span> 
            </h4>
            <p className='md:text-base text-sm'>
                I'm a 3rd year Computer Science student at the University of Waterloo. I'm passionate about building things that make a difference in people's lives. I'm currently looking for a Winter 2022 internship opportunity.
            </p>
        </motion.div>
    </motion.div>
    );
}

export default About;