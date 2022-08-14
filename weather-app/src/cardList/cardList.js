import React, {useEffect} from "react";

import '../App.css';

import Card from "../weathercard/wecard";

const CardList = ({city}) => {
    useEffect(() => {
        console.log('citiesLIst', city);
        return () => {
            console.log('unmount');
        }
    }, []);
    return (
        <div className='CardList'>
        {
            city.map(city => <Card key={city} city={city}/>)
        }
        </div>
    )
}

export default CardList;