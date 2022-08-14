import React, {useState} from 'react';

import './App.css';

import { Input } from './input/inp.js';
import CardList from './cardList/cardList.js'

function App() {
  console.log("App load");
  const [citiesList, setCitiesList] = useState([]);
  return (
    <div className="Main">
      <Input setCitiesList={setCitiesList} />
      <CardList citiesList={citiesList} />
    </div>
  );
}

export default App;
