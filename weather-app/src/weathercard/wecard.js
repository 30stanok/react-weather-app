import React, {useEffect, useState} from 'react';

import '../App.css'

function Card(props) {
    const [data, setdata] = useState();
    useEffect(() => {
        
    }, [date])
    return (
        <div className='WeCard'>
            <div className='MainInfo'>
                <img className='Icon' src='http://openweathermap.org/img/wn/10d@2x.png' alt='Icon'></img>
                <div className='Title'>{props.city}</div>
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