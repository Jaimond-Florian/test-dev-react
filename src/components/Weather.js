import React from 'react'
import { useEffect, useState} from 'react'





function Weather(props) {
    const [temp, setTemp] = useState()
    
    useEffect(() => {
        fetch
        .get(" https://openweathermap.org/")
        .then((res)=> res.data)
        .then((data) => {setTemp(data)
        .catch((err) => console.log(err));
    })
    }, [])




    return (
        <div>
            <h1>Banana</h1>
        </div>
    )
}
export default Weather;