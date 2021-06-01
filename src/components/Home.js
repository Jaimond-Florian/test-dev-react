import React, { useState } from 'react'
import './Home.css'
import { TextField } from '@material-ui/core';
import axios from 'axios'




export default function Home() {
    const [query, setQuery] = useState('')
    const [weather, setWeather] = useState({})
    
    const ApiKey = 
    const ApiUrl = 
    
    const getWeather = (event) => {
            if (event.key === "Enter") {
                 axios.get(ApiUrl)
                      
                      .then(result => {
                       setWeather(result);
                       setQuery('');
                       console.log(result);
                })
            }
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
                        onChange={(e) => setQuery(e.target.value)}
                        onKeyPress={getWeather} 
                    />
                </div>
                <h3>{weather.name}</h3>


        </div>
        
            
        </>
    )
}
