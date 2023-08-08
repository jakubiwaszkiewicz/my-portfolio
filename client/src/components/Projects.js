import React from 'react';
import ProjectImg from '../assets/projects.png';
import Project from './Project';
import CharacterizationsImg from '../assets/characterizations.png';


function Projects() {
    
    return (
        <div className='
            h-screen
            relative
            flex
            overflow-hidden
            flex-col
            text-left
            md:flex-row
            max-2-full
            justify-evenly
            mx-auto
            items-center
            z-0'
        >
            <h1 className='sectionTitle'>
                &nbsp;Projects
            </h1>

            <div
                className='
                relative
                w-full
                flex
                z-20
                flex-col
                lg:flex-row
                justify-center
                align-center
            '>
                <div className='
                    bg-black
                    flex
                    flex-row
                    justify-center
                    items-center
                    bg-opacity-50
                    p-5
                    m-10
                    rounded-xl
                    md:flex-col
                '>
                    
                    <img
                        className='
                            w-40
                            h-40
                            md:w-80
                            md:h-80
                            object-cover
                        '
                        src={CharacterizationsImg}
                        alt=""
                    />
                    <h1 className='
                        uppercase
                        tracking-[8px]
                        text-gray-300
                        text-md
                        transform
                        -translate-x-[-10px]
                        md:text-xl
                        
                    '>
                        Characterizations
                    </h1>
                </div>
                
                <div className='
                    bg-black
                    flex
                    flex-row
                    justify-center
                    items-center
                    bg-opacity-50
                    p-5
                    m-10
                    rounded-xl
                    md:flex-col
                '>
                    
                    <img
                        className='
                            w-40
                            h-40
                            md:w-80
                            md:h-80
                            object-cover
                        '
                        src={CharacterizationsImg}
                        alt=""
                    />
                    <h1 className='
                        uppercase
                        tracking-[8px]
                        text-gray-300
                        text-md
                        transform
                        -translate-x-[-10px]
                        md:text-xl
                        
                    '>
                        Graphics
                    </h1>
                </div>
                
                <div className='
                    bg-black
                    flex
                    flex-row
                    justify-center
                    items-center
                    bg-opacity-50
                    p-5
                    m-10
                    rounded-xl
                    md:flex-col
                '>
                    
                    <img
                        className='
                            w-40
                            h-40
                            md:w-80
                            md:h-80
                            object-cover
                        '
                        src={CharacterizationsImg}
                        alt=""
                    />
                    <h1 className='
                        uppercase
                        tracking-[8px]
                        text-gray-300
                        text-md
                        transform
                        -translate-x-[-10px]
                        md:text-xl
                        
                    '>
                        Architecture
                    </h1>
                </div>

            </div>
        </div>
    );
}

export default Projects;