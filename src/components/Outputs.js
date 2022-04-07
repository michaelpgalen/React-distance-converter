import React, {useState,useEffect} from 'react';

function Outputs(props) {

  let baseFoot = 0
  switch(props.baseUnit) {
    case "Inches":
      baseFoot = (props.baseValue / 12);
      break;
    case "Cm":
      baseFoot = (props.baseValue * 0.032808);
      break;
    case "Feet":
      baseFoot = (props.baseValue);
      break;
    case "Yards":
      baseFoot = (props.baseValue * 3);
      break;
    case "Meters":
      baseFoot = (props.baseValue * 3.2808);
      break;
    case "Km":
      baseFoot = (props.baseValue * 3280.8);
      break;
    case "Miles":
      baseFoot = (props.baseValue * 5280);
      break;
  }

  return (
    <div className = "outputs">
      <p className="outputUnit">Inches:</p>
      <p className = "outputValue">{(baseFoot * 12) || 0}</p>
      <p className="outputUnit">Cm:</p>
      <p className = "outputValue">{(baseFoot / 0.032808) || 0}</p>
      <p className="outputUnit">Feet:</p>
      <p className = "outputValue">{baseFoot || 0}</p>
      <p className="outputUnit">Yards:</p>
      <p className = "outputValue">{(baseFoot / 3) || 0}</p>
      <p className="outputUnit">Meters:</p>
      <p className = "outputValue">{(baseFoot * 0.3048) || 0}</p>
      <p className="outputUnit">Miles:</p>
      <p className = "outputValue">{(baseFoot * 0.00018939) || 0}</p>
      <p className="outputUnit">Km:</p>
      <p className = "outputValue"> {(baseFoot / 3280.8) || 0} </p>
    </div>
  );
}

export default Outputs;
