import React, { useState} from 'react'
import './Home.css'
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import axios from 'axios'
//require('dotenv').config();

export default function Home() {
    
    
    const [query, setQuery] = useState('')
    const [currentWeather, setCurrentWeather] = useState(null)
    
    
    //const ApiKey = process.env.APIKEY
    console.log(process.env.APIKEY)
    const ApiKey = '98b7465353d383f3d0f3bc4a284a48ae'
    const ApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${ApiKey}`
    
    const getWeather = async() =>  {
       await axios.get(ApiUrl)
            .then(res => res.data)
            .then(data => {
            setQuery('');
            setCurrentWeather(data)
           })
            
    }
    return (
    <div className={currentWeather && ((currentWeather.main.temp >=15) ? 'warm' : 'cold')}>
        <div className="temp-container">
           <div className='container'>
            <p>What's the weather in your city ??</p>
                <div className='inputs'>
                    <TextField
                        id="outlined-basic"
                        label="city"
                        variant="outlined" 
                        value={query}
                        required={true}
                        onChange={(e) => setQuery(e.target.value)} 
                        />
                        <Button
                        className="button"
                        type="button"
                        variant="outlined" 
                        onClick={getWeather}>Submit
                        </Button>
                </div>
                <div className="weather">
                    {currentWeather && 
                     <div>
                     <p>{currentWeather.sys.country}</p>
                     <p>{currentWeather.name}</p>
                     <p>{Math.round(currentWeather.main.temp)}°C</p>
                     <p>{currentWeather.weather[0].main}</p>
                     </div>
                    }</div>
                </div>     
        </div>
    </div>
    )
}
