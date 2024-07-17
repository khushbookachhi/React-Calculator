import React from 'react'
import style from './screen.module.css'
import { useCalculator } from '../../contexts/CalculatorContext.jsx';
import useKeydown from '../../hooks/useKeyDown.js';


const Screen = () => {
     // Use the innerScreen variable,calculateByClick function from the Calculator context
    const {innerScreen,calculateByClick}=useCalculator();
    //handleKeydown function will be called for keydown event
    const handleKeydown = (event) => {
        const key = event.key;
        if ((key >= '0' && key <= '9') || key === '.') {
          calculateByClick(key);
        } else if (['+', '-', '*', '/'].includes(key)) {
          calculateByClick(key);
        } else if (key === 'Enter') {
          calculateByClick('=');
        } else if (key === 'Backspace') {
          calculateByClick('C');
        } else if (key === 'Escape') {
          calculateByClick('AC');
        }else if(key === 'ArrowUp'){
            calculateByClick('+/-')
        }else if(key==='p'){
            calculateByClick('%')
        }
      };
    
      // Use the custom hook to add the keydown event listener
      useKeydown(handleKeydown);
   
  return (
    <div className={`${style.screen}`}>{innerScreen}</div>
  )
}

export default Screen