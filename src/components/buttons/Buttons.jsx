import React from 'react'
import Button from './Button'
import style from './buttons.module.css'

// Buttons component for all calculator buttons
const Buttons = () => {
  return (
    <div className={`${style.grid}`} id="button">
        <Button dataValue={"AC"}/>
        <Button dataValue={"+/-"}/>
        <Button dataValue={"%"}/>
        <Button dataValue={"/"} color={true}/>

        <Button dataValue={"7"}/>
        <Button dataValue={"8"}/>
        <Button dataValue={"9"}/>
        <Button dataValue={"*"} color={true}/>

        <Button dataValue={"4"}/>
        <Button dataValue={"5"}/>
        <Button dataValue={"6"}/>
        <Button dataValue={"-"} color={true}/>
         
        <Button dataValue={"1"}/>
        <Button dataValue={"2"}/>
        <Button dataValue={"3"}/>
        <Button dataValue={"+"} color={true}/>

        <Button dataValue={"0"}/>
        <Button dataValue={"."}/>
        <Button dataValue={"C"}/>
        <Button dataValue={"="} color={true}/>
      
        </div>
  )
}

export default Buttons;