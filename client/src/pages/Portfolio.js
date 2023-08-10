import React from 'react'
import { AiOutlineArrowUp } from 'react-icons/ai'
import ProjectImg from '../assets/projects.png'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';

export default function Portfolio({ data }) {

  const categoryParam = useParams().id;

  

    return (
          <div>
              <div className='w-100 min-h-screen flex flex-wrap items-center
              justify-center max-w-7xl mx-auto'>
                <h1 className='nonAbsoluteTitle'>
                  {
                    categoryParam === "1"
                    ? "Archtectural Projects"
                    : categoryParam === "2"
                    ? "Graphic Projects"
                    : "Characetrization Projects" 
                  }
                </h1>

                {data.map((item) => {
                  if (item.categoryId !== categoryParam) return null;
                  return (
                    <div className='w-[400px] h-[400px] m-5 p-7 bg-black bg-opacity-50 rounded-md flex flex-col items-center justify-center cursor-pointer' key={item.id} >
                      <Link to={`/project/${item.id}`}>
                        <img
                          className='w-[400px] h-[300px] object-cover rounded-lg'
                          src={item.img}
                          alt=""
                        />
                        <h1 className='text-center tracking-[6px] pt-3 underline-offset-8 underline'>{item.title}</h1>
                        {/* below line for tests */}
                        <p className='text-xs mt-5'>{item.description}</p>
                      </Link>
                    </div>
                  )
                })}
              </div>
          </div>
    )
}
