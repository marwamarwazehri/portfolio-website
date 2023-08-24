import React from 'react'
import './Navbar.css'; /*hyde dot bte3ne eno it is present in the same directory*/
import Toggle from '../Toggle/Toggle'
import { Link } from 'react-scroll';/*2wal she lezem na3mal install
la react-scroll */

function Navbar() {
  return (
  <div className='n-wrraper'>
      <div className='n-left'>
        <div className='n-name'>Andrew</div>
       <Toggle/>
       </div>
    
    <div className='n-right'>
      <div className='n-list'>
        <ul>
          <Link spy={true} to={Navbar}  smooth={true} activeClass='activeClass'>
          <li>Home</li>
          </Link>
           
            <li><a href='Services'> Services</a></li>
           
          
          <Link spy={true} to={Navbar}  smooth={true} activeClass='activeClass'>
            <li>Experiences</li>
           </Link>
          <Link spy={true} to={Navbar}  smooth={true} activeClass='activeClass'>
           <li>Portfolio</li>
           </Link>
           <Link spy={true} to={Navbar}  smooth={true} activeClass='activeClass'>
            <li>Testimonials</li>
           </Link>
            
             
        </ul>
      </div>
      <button className='button n-button'>contact</button>{/*lclass le hwe 
                button katbeno bel App.css */}
    </div>
      
    </div>
  )
}

export default Navbar
