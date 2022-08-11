import './App.css';

import { Input } from './input/inp.js';
import Card from './weathercard/wecard';

function App() {
  console.log("App load");
  const citiesList = ["nsk", "msk", "jdanovo"];
  return (
    <div className="Main">
      <Input />
      <div className='CardList'>
        {
          citiesList.map(city => {
            <Card city={city}/>
          })
        }
      </div>
    </div>
  );
}

export default App;
