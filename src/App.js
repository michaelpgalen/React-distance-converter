import './App.css';
import React, {useState,useEffect} from 'react';

import Inputs from './components/Inputs'
import Outputs from './components/Outputs'

function App() {
  const [baseUnit, setBaseUnit] = useState('Inches');
  const [baseValue, setBaseValue] = useState(0);

  return (
    <div className="section-wrapper">
      <h2>React Component: Distance Converter</h2>
      <Inputs  baseUnit= {baseUnit} setBaseUnit= {setBaseUnit} baseValue= {baseValue} setBaseValue= {setBaseValue}/>
      <Outputs baseUnit= {baseUnit} baseValue= {baseValue}/>
    </div>
  );
}

// <div> {baseValue} - {baseUnit} </div>

export default App;
