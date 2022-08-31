import React, {useEffect, useState} from 'react';

import { API_KEY } from "../settings";
import '../App.css'

function Card({ city }) {
    const [data, setdata] = useState(null);
    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
        .then(res => res.json())
        .then(json => setdata(json))
        console.log(`render done`);
    }, [])
    if (!data) return null;
    console.log(data)
    const { name, weather, main, cod } = data;
    console.log(cod);
    const { description, icon } = weather[0];
    const { temp, humidity, feels_like } = main;
    return (
        <div className='WeCard'>
            <div className='MainInfo'>
                <img className='Icon' src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt='Icon'></img>
                <div className='Title'>{name}</div>
                <div className='Discription'>{description}</div>
                <div className='Timperature'>{temp.toFixed()}</div>
            </div>
            <div className='Information'>
                <div>Humidity: {humidity}</div>
                <div>Feels like: {feels_like}</div>
            </div>
        </div>
    ); 
}

export default Card;