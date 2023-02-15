import React from 'react'

const PrefCities = ({setQuery}) => {

  const cities = [
    {
      id: 1, title: 'Kolkata'
    },
    {
      id: 2, title: 'Mumbai'
    },
    {
      id: 3, title: 'Delhi'
    },
    {
      id: 4, title: 'London'
    },
    {
      id: 5, title: 'Tokyo'
    },
  ]

  return (
    <div className="flex items-center justify-around my-6">
      {
        cities.map((city) => (
          <button key={city.id} className="text-white text-lg font-medium" onClick={() => setQuery({ q: city.title})}>{city.title}</button>
        ))
      }
    </div>
  )
}

export default PrefCities