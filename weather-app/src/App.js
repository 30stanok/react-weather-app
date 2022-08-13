import './App.css';

import { Input } from './input/inp.js';
import Card from './weathercard/wecard';

function App() {
  console.log("App load");
  const citiesList = ["nsk", "msk", "jdanovo", "tarkov"];
  return (
    <div className="Main">
      <Input />
      <div className='CardList'>
        {
          citiesList.map(city => {
            return <Card key={city} city={city}/>;
          })
        }
      </div>
    </div>
  );
}

export default App;
