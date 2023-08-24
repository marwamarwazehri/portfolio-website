import React from 'react'
import './Footer.css';
import Wave from '../../img/wave.png';
import {AiFillInstagram} from "react-icons/ai";
import {AiFillFacebook} from "react-icons/ai";
import {AiFillGithub} from "react-icons/ai"


const Footer = () => {
  return (
    <div className='footer'> 
    <img src={Wave} alt='' style={{width:'100%'}}/>
    <div className='f-content'>
        <span>marwamarwa@gmail.com</span>
        <div className='f-icons'>
        <AiFillInstagram  className='emoji'/>
        <AiFillFacebook  className='emoji'/>
        <AiFillGithub className='emoji'/>
        </div>
        
</div>

     
    </div>
  )
}

export default Footer
