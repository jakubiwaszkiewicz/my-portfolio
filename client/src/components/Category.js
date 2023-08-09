import React from 'react'

export default function Category({categoryName, categoryImg}) {
    return (
        <div className='
            bg-black
            flex
            flex-col
            justify-center
            items-center
            bg-opacity-50
            p-5
            m-3
            lg:m-10
            rounded-xl
            lg:flex-col
            min-w-[300px]
        '>
            <img
                className='
                    w-40
                    h-35
                    lg:w-80
                    lg:h-80
                    object-cover'
                src={categoryImg}
                alt=""
            />
            <h1 className='
                uppercase
                tracking-[6px]
                md:tracking-[7px]
                lg:tracking-[8px]
                text-white
                text-sm
                md:text-md
                transform
                lg:text-lg
                mt-5
            '>
                &nbsp;{categoryName}
            </h1>
        </div>
    )
}
