import React from 'react'
import './Home.css'
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Weather from './Weather';

export default function Home() {
    return (
        <div className='container'>
            <h3>What's the weather in your town ??</h3>
                <div className="input">
                    <TextField id="outlined-basic" label="Town" variant="outlined" />
                    <Button className="button" variant="outlined" color="primary" href={Weather}>Submit</Button>
                </div>
        </div>
    )
}
