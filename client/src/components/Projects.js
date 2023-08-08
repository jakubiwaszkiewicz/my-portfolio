import React from 'react';
import ProjectImg from '../assets/projects.png';
import Project from './Project';
import CharacterizationsImg from '../assets/characterizations.png';
import Category from './Category';

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
                items-center
                basis-full
            '>
                <Category
                    categoryName='characterizations'
                    categoryImg={CharacterizationsImg}
                />
                <Category
                    categoryName='graphics'
                    categoryImg={CharacterizationsImg}
                />
                <Category
                    categoryName='architecture'
                    categoryImg={CharacterizationsImg}
                />

            </div>
        </div>
    );
}

export default Projects;