import React from 'react'
import './FloatingDiv.css';
import { useContext } from 'react';
import { themeContext } from '../../Context';

function FloatingDiv({img,txt1,txt2}) {
  const theme=useContext(themeContext);
    const darkMode=theme.state.darkMode
  return (
    <div className='floatingdiv' style={{color:darkMode?'black':''}}>
      <img src={img}/>
      <span>
        {txt1}
        <br/>
        {txt2}
        </span>
    </div>
  )
}

export default FloatingDiv
