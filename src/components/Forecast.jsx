import React from 'react'

import sunny from '../assets/sunny.png'

const Forecast = (props) => {
  return (
    <div>
      <p className="text-white font-medium mt-6 uppercase">{props.title}</p>
      <hr className="my-2" />
      <div className="flex felx-row items-center justify-between text-white">
        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">
            6 AM
          </p>
          <img src={sunny} alt="" className="w-7 mt-2" />
          <p>27℃</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">
            9 AM
          </p>
          <img src={sunny} alt="" className="w-7 mt-2" />
          <p>27℃</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">
            12 PM
          </p>
          <img src={sunny} alt="" className="w-7 mt-2" />
          <p>27℃</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">
            3 PM
          </p>
          <img src={sunny} alt="" className="w-7 mt-2" />
          <p>27℃</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">
            6 PM
          </p>
          <img src={sunny} alt="" className="w-7 mt-2" />
          <p>27℃</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">
            9 PM
          </p>
          <img src={sunny} alt="" className="w-7 mt-2" />
          <p>27℃</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="font-light text-sm">
            12 PM
          </p>
          <img src={sunny} alt="" className="w-7 mt-2" />
          <p>27℃</p>
        </div>
      </div>
    </div>
  )
}

export default Forecast;