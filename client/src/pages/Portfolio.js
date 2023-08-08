import React from 'react'
import { AiOutlineArrowUp } from 'react-icons/ai'

export default function Portfolio() {
    return (
          <div>
              Portfolio
              <div className="sticky bottom-5 w-full">
                  <div className="flex items-center justify-end mr-10">
                    <a href="#hero" className='cursor-pointer'>
                      <AiOutlineArrowUp
                        className="w-10 h-10 filter hover:text-[#aa4a44] transtion-hover duration-300"
                      />
                    </a>
                  </div>
                </div>
          </div>
    )
}
