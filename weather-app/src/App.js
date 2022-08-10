import './App.css';

import { Input } from './input/Index.js';
import Card from './weathercard/wecard';

function App() {
  return (
    <div className="Main">
      <Input />
      <div className='CardList'>
        <Card />
      </div>
    </div>
  );
}

export default App;
