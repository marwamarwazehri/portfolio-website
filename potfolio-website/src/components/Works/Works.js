import React from 'react'
import './Works.css'
import Upwork from '../../img/Upwork.png';
import fiverr from '../../img/fiverr.png';
import amazon from '../../img/amazon.png';
import Facebook from '../../img/Facebook.png';
import Shopify from '../../img/Shopify.png';
import { useContext } from 'react';
import { themeContext } from '../../Context';
import {motion} from 'framer-motion'






const Works = () => {
  const theme=useContext(themeContext);
    const darkMode=theme.state.darkMode;
    const transition={duration:3.5,type:'spring'} 

  return (
    <div className='works'>
      {/*left side */}
        <div className='awsome'> 
        <span style={{color:darkMode?'white':''}}>Works for All these </span>
         <span>Brands & Clients </span>
          
          <span>Frontend Developer with hight elvel of experience in web desigin 
            <br/>
            Developer with hight elvel of experience in web desigin
          <br/>
            Frontend Developer with hight elvel of experience in web desigin 
            <br/>
            gexperience in web desiging</span>
           
              <button className='button s-button'>Hire me </button>
              <div className='blur s-blur1' style={{background:'#c1F5FF'}}></div>
        </div>
      
{/* right side  */}

<div className='w-right'>
  <motion.div 
   initial={{rotate:'45'}}
    whileInView={{rotate:0}}
    viewport={{margin:'-40px'}} /* hay y3ne after it comes to the view of -40px it will
    rotate*/
    transition={transition}
  className='w-mainCircle'>
      <div className='w-setCircle'>
        <img src={Upwork}/>
</div>
<div className='w-setCircle'>
        <img src={fiverr}/>
</div>

<div className='w-setCircle'>
        <img src={amazon}/>
</div>

<div className='w-setCircle'>
        <img src={Shopify}/>
</div>
<div className='w-setCircle'>
        <img src={Facebook}/>
</div>
  </motion.div>
    {/*back Circles */}
  <div className='w-backCircle blueCircle'></div>
   <div className='w-backCircle yellowCircle'></div>
   </div>
      
    </div>
  )
}

export default Works
