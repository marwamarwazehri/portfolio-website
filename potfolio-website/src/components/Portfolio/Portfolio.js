import React from 'react'
import {Swiper, SwiperSlide } from 'swiper/react'; /* hon lSwiper hye bt3male metal silder or scroller  
shofe ta7et keef sta3malnaha btefhame */
import './Portfolio.css';
import Sidebar from '../../img/sidebar.png';
import Ecommerce from '../../img/ecommerce.png';
import HOC from '../../img/hoc.png';
import MusicApp from '../../img/musicapp.png';
import 'swiper/css' /*hon 3am n3mal import la css ta3oul lSwiper */
import { useContext } from 'react';
import { themeContext } from '../../Context';



const Portfolio = () => {
  const theme=useContext(themeContext);
    const darkMode=theme.state.darkMode;
   
  return (
    <div className='portfolio'>
       {/*heading */}
       <span style={{color:darkMode?'white':''}}> React Projects</span>
        <span> Portfolio</span>
        {/*slider */}
        <Swiper spaceBetween={30} slidesPerView={3} /* slidesPerView y3ne ana adeh bade ybyen eno masalan 3 wlama e3mal scroll be balsho ybyno lb2yeen 3 3 3ala lpage */
        grabCursor={true} /* lmafroud  grabCursor lama 7ota true  t5alene w2ta e3mal scroll yseer lmouse metal hand*/
        className='portfolio-slider'>
            
            <SwiperSlide> <img src={Sidebar}/></SwiperSlide>
              <SwiperSlide> <img src={Ecommerce}/></SwiperSlide>
              <SwiperSlide> <img src={MusicApp}/></SwiperSlide>
              <SwiperSlide> <img src={HOC}/></SwiperSlide>
        </Swiper>

    </div>
  )
}

export default Portfolio
