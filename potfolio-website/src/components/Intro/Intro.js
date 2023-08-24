import React from 'react'
import './Intro.css';
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import boy from '../../img/boy.png';
import thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import glassesimoji from '../../img/glassesimoji.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import { useContext } from 'react';
import { themeContext } from '../../Context';
import {motion} from 'framer-motion'; /*3melna import la lmotion men 
lframer-motion */

function Intro() {
    const theme=useContext(themeContext);
    const darkMode=theme.state.darkMode;
    const transition={duration:2,type:'spring'} 
  return (
    <div className='intro'>
        <div className='i-left'>
            <div className='i-name'>
                <span style={{color:darkMode?'white':''}}>Hy! I Am</span>
                <span >Androw Thomas</span>
                <span style={{color:darkMode?'white':''}}> Frontend Developer with hight 
                    elvel of experience in web desiging
                    and development ,producting the Quality </span>
                    </div>
                <button className=' button i-button'>hire me </button>{/*lclass le hwe 
                button katbeno bel App.css  ma tense */}

                <div className='i-icons'>
                    <img src={Github} /> {/*fena nhot limg be aleb link 
                    3ashen lama ekbos 3leh y5edne 3ala  github msalan  whek */}
                    <img src={LinkedIn} />
                    <img src={Instagram} />
                    </div>
        </div>

    <div className='i-right'>
       <img src={Vector1} /> 
        <img src={Vector2} />
        <img src={boy}/>
        <motion.img  
        initial={{left:'-36%'}}
        whileInView={{left:'-24%'}}
        transition={transition}
        src={glassesimoji}/> {/*le 3mlna hon eno tala3e 7tyna motion.img
        ba3den 7tyna kam parameter 2wal wa7ad eno initial y3ne 
        2wal ma yn3mal load lal page hotele left -36% ,3male refresh wshofe
        ba3den 7tyna  whileInView y3ne nehna w3am n3mal view eno lama t5ales
        lpage load  7tyna left -24% ,wb3den 7tyna transition parmeter
        equal ltransition le 3melnaha fo2 */}
    
    < motion.div  
        initial={{top:'-4%',left:'74%'}}
        whileInView={{left:'68%'}}
        transition={transition}
    style={{top:'-4%',left:'68%'}}>
        <FloatingDiv img={Crown} txt1='Web' txt2='Developer'/>
    </motion.div>

    <motion.div 
    initial={{left:'9rem',top:'18rem'}}
    whileInView={{left:'0rem'}}
    transition={transition}

    style={{top:'18rem',left:'0rem'}}>
        <FloatingDiv img={thumbup} txt1='Best Design' txt2='Award'/>
    </motion.div>
    <div className='blur' style={{background:'rgb(238 210 255)'}}></div>
</div>
<div className='blur' style={{background:'#c1F5FF',
top:'24rem',
width:'21rem',
height:'11rem',
left:'30rem'}}></div>
</div>

      
    
  )
}

export default Intro
