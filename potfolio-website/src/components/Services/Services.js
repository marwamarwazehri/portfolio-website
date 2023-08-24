import React from 'react'
import './Services.css'
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Card from '../Card/Card'
import  Resume from'./Resume.pdf' /*hyda lpdf ana 7atyto men 3ende be aleb Services folder 
so 3melnalo import hon  */
import { useContext } from 'react';
import { themeContext } from '../../Context';
import {motion} from 'framer-motion';

const Services = () => {
  const theme=useContext(themeContext);
    const darkMode=theme.state.darkMode;
    const transition={duration:1,type:'spring'} 

  return (
    <div className='services' id='Services'>
        {/*left side */}
        <div className='awsome'> 
        <span style={{color:darkMode?'white':''}}> My Awsome</span>
         <span>Services</span>
          <span style={{color:darkMode?'white':''}}>Frontend Developer with hight elvel of experience in web desigin 
         <br/>
            gexperience in web desiging</span>
            <a href={Resume} download> {/*so hon bade lama ekbos 3ala hay 
            lbutton e3mal download la hayda lpdf le hwe Resume so 7atet href={Resume} hyda
            lResume le 3amlenlo import fo2 w7tyna type download*/}
              <button className='button s-button'> Download CV</button>
              </a>
            
            <div className='blur s-blur1' style={{background:'#c1F5FF'}}></div>
        </div>
      
       {/*right side  */}
        <div className='cards'>
          <motion.div 
          initial={{left:'25rem'}}
        whileInView={{left:'14rem'}}
        transition={transition}
          style={{left:'14rem'}}>
            <Card emoji={HeartEmoji}
            heading="Design" 
            detail={"Figma,sketch,Photoshop Adobe,Adobe x"}/>
            </motion.div> 
        


        <div style={{top:'12rem',left:'-4rem'}}>
            <Card emoji={Glasses}
            heading="Developer" 
            detail={"Html,css,javaScript,React"}/>
            </div> 


            

        <div style={{top:'19rem',left:'12rem'}}>
            <Card emoji={Humble}
            heading="UI/UX" 
            detail="Frontend Developer with hight elvel of experience in web desigin "/>
            </div> 
            <div className='blur s-blur2' style={{background:'var(--purple)'}}></div>
       </div>
   </div>
  )
}

export default Services


