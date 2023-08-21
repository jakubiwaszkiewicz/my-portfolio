import React from 'react'
import { Link } from 'react-router-dom'

export default function Portfolio({ data }) {

    return (
          <div>
              <div className='w-100 min-h-screen flex flex-wrap flex-col items-center
              justify-center max-w-7xl mx-auto'>
                <h1 className='nonAbsoluteTitle text-center'>
                  My Projects
                </h1>
                <h1 className='nonAbsoluteTitle text-center text-lg'>
                  (click on project for more info)
                </h1>
                <div className='flex flex-wrap items-center justify-center'>
                  {data.map((item) => {
                    return (
                      <Link to={`/project/${item.id}`}>
                        <div className='w-[350px] min-h-[350px] m-5 p-7 bg-black bg-opacity-50 opacity-90 transition hover:opacity-100 rounded-md flex flex-col justify-center items-center cursor-pointer' key={item.id} >
                            <img
                              className='object-cover rounded-lg'
                              src={item.img}
                              alt=""
                            />
                            <h1 className='decoration-1 font-light lg:text-2xl text-xl underline underline-offset-2 tracking-[6px]'>{item.title}</h1>  
                        </div>
                      </Link>
                    )
                  })}
                </div>
              </div>
          </div>
    )
}
