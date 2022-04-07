import React, {useState,useEffect} from 'react';

function Inputs({
  baseUnit, setBaseUnit, baseValue, setBaseValue
}) {
  const units = ["Inches", "Cm", "Feet", "Yards", "Meters", "Km", "Miles"]
  const picker = units.map((unit) =>
    <option className="unit" key= {unit} value={unit} children={unit} />
  )

  function handleUnitChange(e) {
    setBaseUnit(e.target.value)
    }

  return (
    <div className="inputSection">
      <label htmlFor="unit-select" className="inputLabel inputElement">Choose a Unit</label>
      <select className="inputElement" name="units" id="unit-select" onChange={handleUnitChange}>
        {picker}
      </select>
      <input type="number" id="inputField" value={baseValue} placeholder="0" onChange={(e) => { setBaseValue(e.target.value); console.log(e) }}/>
    </div>
  );
}

export default Inputs;
