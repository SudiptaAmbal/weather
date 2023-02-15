import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTemperatureThreeQuarters, faWind, faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons'
import { BsDroplet } from "react-icons/bs";
import { GiSunrise, GiSunset } from "react-icons/gi";
import { iconimg } from '../services/Weather';


const TempDetails = ({weather: {temp, feels_like, temp_min, temp_max, humidity, speed, sunrise, sunset, details, icon}}) => {

    let rise = new Date (sunrise * 1000)
    let risetime = rise.toLocaleTimeString('en-US', {hour: "numeric", minute: "numeric"})
    let set = new Date (sunset * 1000)
    let settime = set.toLocaleTimeString('en-US', {hour: "numeric", minute: "numeric"})

  return (
    <div>
        <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
            <p>{`${details}`}</p>
        </div>

        <div className="flex flex-row items-center justify-between text-white py-3">
            <img src={iconimg(icon)} alt="icon" className="w-20"/>
            <p className="text-5xl pl-10 pb-10">{`${temp.toFixed()}`}°</p>
            <div className="flex flex-col space-y-2">
                <div className="flex font-light text-sm items-center justify-center">
                    <FontAwesomeIcon icon={faTemperatureThreeQuarters} className="mr-1"/>
                    <p className="mr-1">Real fell</p>
                    <span>{`${feels_like.toFixed()}`}°</span>
                </div>
                <div className="flex font-light text-sm items-center justify-center">
                <BsDroplet className="mr-1"/>
                    <p className="mr-1">Humidity</p>
                    <span>{`${humidity}`}%</span>
                </div>
                <div className="flex font-light text-sm items-center justify-center">
                    <FontAwesomeIcon icon={faWind} className="mr-1"/>
                    <p className="mr-1">Wind</p>
                    <span>{`${speed}`} km/h</span>
                </div>
            </div>
        </div>

        <div className="flex flex-row items-center justify-between space-x-1 text-white text-sm py-2">
            <GiSunrise size={20}/>
            <p>Sunrise</p>
            <span>{`${risetime}`}</span>
            <p>|</p>
            <GiSunset size={20}/>
            <p>Sunset</p>
            <span>{`${settime}`}</span>
            <p>|</p>
            <FontAwesomeIcon icon={faArrowUp}/>
            <p>High</p>
            <span>{`${temp_max}`}°</span>
            <p>|</p>
            <FontAwesomeIcon icon={faArrowDown}/>
            <p>Low</p>
            <span>{`${temp_min}`}°</span>
        </div>
    </div>
  )
}

export default TempDetails