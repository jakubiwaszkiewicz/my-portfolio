import React from 'react';
import { motion } from 'framer-motion';


function Project({ value, img, description, title }) {
    return (
        <div
            className='w-screen flex-shrink-1 snap-center flex flex-col space-y-5
            items-center justify-center p-20 md:p-33 h-screen'
        >
            <motion.img
                initial={{
                    opacity: 0,
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 1,
                }}
                viewport={{ once:true }}
                src={img}
                alt=""
                className='rounded-2xl shadow-xl max-w-[500px]'
            />
            <div className='space-y-4 lg:space-y-10 px-0 md:px-10 max-w-6xl'>
                <h4 className='text-center font-semibold lg:text-4xl text-xl'>
                    <span className="underline decoration-[#AA4A44] text-center underline-offset-8">
                        Project 1 of {value}: 
                    </span>
                {" "} {title}
                </h4>
                <p className='text-sm text-center md:text-left'>
                    {description}
                </p>
            </div>
        </div>
    );
}

export default Project;