import React, { useState } from 'react'
import { GoLocation, GoSearch } from "react-icons/go";

const InputCity = ({setQuery, units, setUnits}) => {

  const [city, setCity] = useState('')

  const handleSearch = () => {
    if (city !== '')
      setQuery({q: city})
  }

  const handlelocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;

        setQuery({lat,lon})
      })
    }
  }

  const handleUnits = (e) => {
    const selectedUnit = e.currentTarget.name
    if (units !== selectedUnit)
      setUnits(selectedUnit)
  }

  return (
    <div className="flex flex-row justify-center my-6">
      <div className="flex fle-row w-3/4 items-center justify-center space-x-4">
        <GoLocation size={25} className="text-white cursor-pointer transition ease-out hover:scale-125" onClick={handlelocation}/>
        <input type="text" className="text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase" 
          placeholder='search ...' value={city} onChange={(e) => setCity(e.currentTarget.value)} />
        <GoSearch size={25} className="text-white cursor-pointer transition ease-out hover:scale-125" onClick={handleSearch}/>
      </div>
      <div className="flex flex-row w-1/4 items-center justify-center">
        <button name="metric" className="text-xl text-white font-light transition ease-out hover:scale-125" onClick={handleUnits}>℃</button>
        <p className="text-xl text-white mx-1.5">|</p>
        <button name="imperial" className="text-xl text-white font-light transition ease-out hover:scale-125" onClick={handleUnits}>℉</button>
      </div>
    </div>
  )
}

export default InputCity