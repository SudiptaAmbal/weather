import React from 'react'

const TimeAndLocation = ({ weather: { name, country, dt } }) => {

  let myTime = new Date(dt * 1000)
  let date = myTime.toLocaleDateString('en-GB')
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  let day = days[myTime.getDay()]

  return (
    <div>
      <div className="flex items-center justify-center my-6">
        <p className="text-center text-white text-xl font-extralight">
          {`${day}, ${date}`}
        </p>
      </div>
      <div className="flex items-center justify-center my-3">
        <p className="text-white text-3xl font-medium">
          {`${name}, ${country}`}
        </p>
      </div>
    </div>
  )
}

export default TimeAndLocation