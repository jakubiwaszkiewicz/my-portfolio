import React from 'react'
import { AiOutlineArrowUp } from 'react-icons/ai'
import ProjectImg from '../assets/projects.png'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom';

export default function Portfolio() {

  let { categoryParam } = useParams();

  const data = [{
    id: 1,
    img: `${ProjectImg}`,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, vo',
    title: 'Krzychu',
  },
  {
    id: 2,
    img: `${ProjectImg}`,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, vo',
    title: 'i Lejczak',
  },
  {
    id: 3,
    img: `${ProjectImg}`,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, vo',
    title: 'coś tam',
  },
  {
    id: 4,
    img: `${ProjectImg}`,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, vo',
    title: 'naura',
  },
  {
    id: 5,
    img: `${ProjectImg}`,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, vo',
    title: 'Krzychu',
  },
  {
    id: 6,
    img: `${ProjectImg}`,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, vo',
    title: 'i Lejczak',
  },
  {
    id: 7,
    img: `${ProjectImg}`,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, vo',
    title: 'coś tam',
  },
  {
    id: 8,
    img: `${ProjectImg}`,
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, vo',
    title: 'naura',
  }];

    return (
          <div>
              <div className='w-100 min-h-screen flex flex-wrap items-center justify-center max-w-7xl mx-auto'>
                  {data.map((item) => {
                    return (
                      <div className='w-[400px] h-[400px] m-5 p-5 bg-black bg-opacity-50 rounded-md' key={item.id} cursor-pointer>
                        <Link to={`/project/${item.id}`}>
                          <img
                            className='w-[400px] h-[300px] object-cover'
                            src={item.img}
                            alt=""
                          />
                          <p>{item.title}</p>
                        </Link>

                      </div>
                    )
                  })}
              </div>
              
          </div>
    )
}
