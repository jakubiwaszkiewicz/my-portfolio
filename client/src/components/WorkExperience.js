import React from 'react';
import ExpCard from './ExpCard';

function WorkExperience({ expData }) {

    console.log(expData)

    return (
        <div>
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
                    &nbsp;Experience
                </h1>
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
                    scrollbar-thumb-[#ffffff]'
                >
                    {expData.map((x) => (
                        <ExpCard
                            key={x.id}
                            img={x.img}
                            title={x.title}
                            date={x.date}
                            whatHaveIDoneHere={x.whatHaveIDoneHere}
                        />))}
                </div>
            </div>
        </div>
    );
}

export default WorkExperience;