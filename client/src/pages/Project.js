import { useState } from 'react';
import ProjectImg from '../assets/projects.png';
import ProjectImg2 from '../assets/madzia-seba.jpg';

export default function Project() {

  const[mainImg, setMainImg] = useState(0)
  const images = [
    "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
  ]
      // eslint-disable-next-line no-lone-blocks
      {/* 
        <img src={images[0]} alt="" onClick={e=>setMainImg(0)} className='w-[150px] h-[150px] object-cover mb-[10px]'/>
        <img src={images[1]} alt="" onClick={e=>setMainImg(1)} className='w-[150px] h-[150px] object-cover mb-[10px]'/>
      */}

    return (
      <div className="py-[20px] px-[50px] flex gap-4">
        <div className="flex gap-2">
          <div className="flex-1">
            {images.map((img, index) => {
              return (
                <img src={img} alt="" onClick={e=>setMainImg(index)} className='w-[150px] h-[150px] object-cover mb-[10px]'/>
              )
            })}
          </div>
          <div className="flex-[3_3_0%] flex itemc-center justify-center">
            <img src={images[mainImg]} alt="" className='max-h-[800px] object-conatin'/>
          </div>
          <div className="flex-1 flex flex-col gap-2 bg-black bg-opacity-50 h-fit p-5">
            <h1 className=''>Title</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Rerum, a? Adipisci id saepe animi harum autem deserunt culpa temporibus
              inventore consectetur dignissimos debitis voluptatum rerum aut, nemo nisi corrupti. Ullam
            </p>
            <div className="info">
              <span>Typ projektu: architektura</span>
              <span>Tag: architektura, ręczna robota, kielnia</span>
            </div>
          </div>
        </div>
      </div>
    )}
