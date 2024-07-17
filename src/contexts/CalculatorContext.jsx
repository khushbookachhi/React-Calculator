import React, { createContext, useContext, useState } from 'react';

const CalculatorContext = createContext();
// function for using context 
export const useCalculator = () => {
  return useContext(CalculatorContext);
};

export const CalculatorProvider = ({ children }) => {
  const [op1, setOp1] = useState(0);
  const [op2, setOp2] = useState(0);
  const [operator, setOperator] = useState(null);
  const [count, setCount] = useState(1);
  const [innerScreen, setInnerScreen] = useState("");
  const [ans, setAns] = useState(0);
// function for handling clickable events 
  const calculateByClick = (n) => {
    console.log("dataValue:- ", typeof(n));
    if ((n === '0' || n === '1' || n === '2' || n === '3' || n === '4' || n === '5' || n === '6' || n === '7' || n === '8' || n === '9' || n === '.') && count <= 16) {
      console.log("updating innerScreen");
      setInnerScreen(prevState => prevState + n);
      setCount(prevState => prevState + 1);
    } else {
      if (n === 'AC') {
        setInnerScreen("");
        setCount(1);
        setOp1(0);
        setOp2(0);
      } else if (n === '+' || n === '-' || n === '*' || n === '/') {
        setOperator(n);
        setOp1(parseFloat(innerScreen));
        setInnerScreen("");
        setCount(prevState => prevState + 1);
        console.log(op1);
      } else if (n === "=") {
        if(op1){
          setOp2(parseFloat(innerScreen));
          console.log(op2);
          const result = eval(op1 + " " + operator + " " + parseFloat(innerScreen));
          setAns(result);
          setInnerScreen(result.toString());
          setOp1(0);
          setOp2(0);
          setCount(1);
        }else{
          setOp1(0);
          setOp2(0);
          return;
        }
       
        console.log(ans);
      } else if (n === 'C') {
        setInnerScreen(prevState => prevState.slice(0, prevState.length - 1));
      } else if (n === '+/-') {
        let x = parseFloat(innerScreen);
        setInnerScreen(prevState => (-x).toString());
      } else if (n === '%') {
        setInnerScreen(prevState => (parseFloat(prevState) * 0.01).toString());
       setOp1(0);
       setOp2(0);
      }
    }
  };

  return (
    <CalculatorContext.Provider value={{ calculateByClick, innerScreen }}>
      {children}
    </CalculatorContext.Provider>
  );
};
