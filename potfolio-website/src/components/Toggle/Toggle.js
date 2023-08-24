import React from 'react'
import './Toggle.css';
import {BiMoon} from "react-icons/bi"
import {BsSun} from "react-icons/bs"
import { useContext } from 'react';
import { themeContext } from '../../Context';
const Toggle = () => {
    const theme=useContext(themeContext);
    const darkMode=theme.state.darkMode;


    const handleClick=()=>{
        theme.dispatch({type:'toggle'})
    }
  return (
    <div className='toggle'  onClick={handleClick}> {/*onClick kena hateena bel
    div le ta7et ta3oul t-button bas 7asyna shway lta8ayor  bate2 lama nekbos 3shen hek 
    7tynaha hon 
     */}
        <BiMoon/>
        <BsSun/>
        <div className='t-button' style={darkMode?{left:'2px'}:{right:'2px'}}
       ></div>
    
    </div>
  )
}

export default Toggle
