import React, {useEffect, useState} from 'react';

import { API_KEY } from "../settings";
import '../App.css'

function Card({ city }) {
    const [data, setdata] = useState(null);
    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
        .then((data) => {
            console.log(data)
        })
        console.log(`render done`)
    }, [data])
    console.log(`wecard render`)
    return (
        <div className='WeCard'>
            <div className='MainInfo'>
                <img className='Icon' src='http://openweathermap.org/img/wn/10d@2x.png' alt='Icon'></img>
                <div className='Title'>{city}</div>
                <div className='Discription'>Cloudy</div>
                <div className='Timperature'>20</div>
            </div>
            <div className='Information'>
                <div>Humidity: 15</div>
                <div>Feels like: 19</div>
            </div>
        </div>
    ); 
}

export default Card;