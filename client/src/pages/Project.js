import React, { useState } from 'react'
import Img1 from '../assets/characterizations.png'
import Img2 from '../assets/madzia-seba.jpg'


export default function Project() {

  const [mainImg, setMainImg] = useState(0)

  return (
    <div>
      <div className="flex">
        <div>
          <Img1 onClick={e=>setMainImg(0)} />
          <Img2 onClick={e=>setMainImg(1)} />
        </div>
        <div> 
          {mainImg === 0 ? <Img1 /> : <Img2 />}
        </div>
      </div>
      <div>
        <h1>Title</h1>

        <span>190 PLN</span>

        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Rerum, a? Adipisci id saepe animi harum autem deserunt culpa temporibus
          inventore consectetur dignissimos debitis voluptatum rerum aut, nemo nisi corrupti. Ullam
        </p>

        <div>
          <span>Typ produktu: Miód</span>
          <span>Tag: Miód, pszczoły</span>
        </div>
        <hr />
        <div>
          <span>OPIS</span>
          <hr />
          <span>DODATKOWE INFORMACJE</span>
          <hr />
          <span>FAQ</span>
        </div>

      </div>
    </div>
  )
}
