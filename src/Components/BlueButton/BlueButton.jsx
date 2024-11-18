import React from 'react'
import './BlueButton.css'
export const BlueButton = (props) => {
  return (
    <div className="bluebutton" onClick={props.clickHandler}>{props.name}</div>
  )
}
