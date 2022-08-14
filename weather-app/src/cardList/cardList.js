import React from "react";

import '../App.css';

import Card from "../weathercard/wecard";

const CardList = ({ citiesList }) => {
    return (
        <div className='CardList'>
        {
            citiesList.map(city => <Card key={city} city={city} />)
        }
        </div>
    )
}

export default CardList;