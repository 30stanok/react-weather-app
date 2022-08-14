import React, {useState} from 'react';

import './App.css';

import { Input } from './input/inp.js';
import CardList from './cardList/cardList.js'

function App() {
  console.log("App load");
  const [city, setCity] = useState([]);
  return (
    <div className="Main">
      <Input setCity={setCity} />
        <CardList city={city}/>
    </div>
  );
}

export default App;
