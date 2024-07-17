import React from 'react'
import style from './buttons.module.css'
import { useCalculator } from '../../contexts/CalculatorContext.jsx'; // Import the custom hook from the Calculator context

// Button component for individual calculator buttons
const Button = ({color,dataValue}) => {
   // Use the calculateByClick function from the Calculator context
    const {calculateByClick}=useCalculator();
     // Render a button with conditional styling and an onClick handler
  return (
    <button className={`${style.common} ${color? `${style.color}`:''}`}
    onClick={()=>calculateByClick(dataValue)}>{dataValue}</button>
  )
}

export default Button