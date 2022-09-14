import React, { useState } from "react";
import { HexColorPicker } from "react-colorful";
import "./styles.css";
import { withComponentFeatures } from 'universal-dashboard'

const UDColorful = props => {
  const [color, setColor] = useState("#0400e0");
  return (<div key={props.id}>{props.text}
    <HexColorPicker color={color} onChange={setColor} />
    <div className="value" style={{ borderLeftColor: color }}>
      Current color is {color}
    </div>
  </div>);
}

export default withComponentFeatures(UDColorful)