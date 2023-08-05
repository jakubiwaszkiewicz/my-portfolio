import React from 'react';
import ProjectImg from '../assets/projects.png';
import Project from './Project';



function Projects() {
    const data = [{
        key: 1,
        img: `${ProjectImg}`,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, vo',
        title: 'Krzychu',
    },
    {
        key: 2,
        img: `${ProjectImg}`,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, vo',
        title: 'i Lejczak',
    },
    {
        key: 3,
        img: `${ProjectImg}`,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, vo',
        title: 'coś tam',
    },
    {
        key: 4,
        img: `${ProjectImg}`,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, vo',
        title: 'naura',
    }];
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
            <div
                className='
                relative
                w-full
                flex
                overflow-x-scroll
                overflow-y-hidden
                snap-x
                snap-mandatory
                z-20 scrollbar
                scrollbar-track-gray-400/20
                scrollbar-thumb-[#aa4a44]/80'
            >
                {data.map((x, i) => (
                <Project
                    value={i+1}
                    key={x.key}
                    img={x.img}
                    description={x.description}
                    title={x.title}
                />))}
            </div>
            <div className='w-full absolute top-[30%] left-0 h-[500px] bg-[#AA4A44]/20 -skew-y-12'>
            </div>
        </div>
    );
}

export default Projects;