import { useState, useEffect } from 'react';

import './App.css';

import InputCity from './components/InputCity';
import PrefCities from './components/PrefCities';
import TempDetails from './components/TempDetails';
import TimeAndLocation from './components/TimeAndLocation';
import getFormattedWeatherData from './services/Weather';


function App() {

  const [query, setQuery] = useState({ q: 'kolkata' })
  const [units, setUnits] = useState('metric')
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    const fetchWeather1 = async () => {
      await getFormattedWeatherData({ ...query, units }).then((data) => {
        setWeather(data)
      })
    }
    fetchWeather1()
  }, [query,units])


  return (
    <div className="mx-auto max-w-lg mt-4 py-5 px-8 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
      <PrefCities setQuery={setQuery} />
      <InputCity setQuery={setQuery} units={units} setUnits={setUnits}/>
      {
        weather && (
          <>
            <TimeAndLocation weather={weather} />
            <TempDetails weather={weather} />
          </>
        )
      }
    </div>
  );
}

export default App;
