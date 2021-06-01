import React, { useState } from 'react'
import './Home.css'
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import axios from 'axios'
require('dotenv').config()






export default function Home(props) {
    // props à passer weather[0].main main.temp name pour l'afficher sur la 2eme page
    
    const [query, setQuery] = useState('')
    const [currentWeather, setCurrentWeather] = useState({})
    
    const [showData, setShowData] = useState(null)
    //const ApiKey = process.env
    //const ApiUrl = process.env
    const ApiKey = '98b7465353d383f3d0f3bc4a284a48ae'
    const ApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${ApiKey}`
    
    const getWeather = async() =>  {
       await axios.get(ApiUrl)
            .then(res => res.data)
            .then(data => {
            setQuery('');
            setCurrentWeather(data)
            setShowData(
            <div>
                <p>{data.name}</p>
                <p>{Math.round(data.main.temp)}°C</p>
                <p>{data.weather[0].main}</p>
            </div>)
            })
            
    }
    return (
    <>
      <div className='container'>
        <h3>What's the weather in your town ??</h3>
            <div className="input">
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
                {showData}
                <p>{/*data.weather[0].main*/}</p>
            </div>
        </div>
       
  
           
    </>
    )
}
