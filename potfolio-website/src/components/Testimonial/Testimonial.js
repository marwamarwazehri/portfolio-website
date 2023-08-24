import React from 'react'
import './Testimonial.css';
import {Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import profile1 from '../../img/profile1.jpg';
import profile2 from '../../img/profile2.jpg';
import profile3 from '../../img/profile3.jpg';
import profile4 from '../../img/profile4.jpg';
import { Pagination } from 'swiper'; /* 3melna import la hay  */
import 'swiper/css/pagination';/*whon 3am n3mal import la css ta3oul pagination  */

import { useContext } from 'react';
import { themeContext } from '../../Context';



const Testimonial = () => {
    const theme=useContext(themeContext);
    const darkMode=theme.state.darkMode;


    const clients=[
        {img:profile1,
        review: 'Speedily say has suitable disposal add boy. On forth doubt miles of child. Exercise joy man children rejoiced. Yet uncommonly his ten who diminution astonished',
},

 {img:profile2,
        review: 'Speedily say has suitable disposal add boy. On forth doubt miles of child. Exercise joy man children rejoiced. Yet uncommonly his ten who diminution astonished',
},

 {img:profile3,
        review: 'Speedily say has suitable disposal add boy. On forth doubt miles of child. Exercise joy man children rejoiced. Yet uncommonly his ten who diminution astonished',
},

 {img:profile4,
        review: 'Speedily say has suitable disposal add boy. On forth doubt miles of child. Exercise joy man children rejoiced. Yet uncommonly his ten who diminution astonished',
},





    ]
  return (
    <div className='t-wrapper'>
        <div className='t-heading'>
            <span>client always get</span>
            <span>Exceptional Work</span>
            <span>from me...</span>
            <div className='blur t-blur1' style={{background:"var(--purple)"}}></div>
            <div className='blur t-blur2' style={{background:"skyblue"}}></div>
            </div>

            <Swiper  modules={[Pagination]}  /*Pagination hye hol lpionts le ta7et le fena netna2l men 5elalon lama nekbos 3ala aya we7de fehon 
            masalan 2wal piont bta5edne 3ala 2wal sora tane piont 3ala tane sora whek ,bas be dal
            fena n3mal scroll 3ade  bala ma nesta3mel lpionts akked */
            slidesPerView={1}  
            pagination={{clickable:true}} /*lezem nhot hay eno bel pagination lclickable 
            true 7ata yseer fena netna2al men 5elal lpionts */
            className='swiper-slide'>
                {clients.map((client,index)=>{
                    return( 
                        <SwiperSlide key={index}>
                            <div className='testimonial' style={{background:darkMode?'rgba(88, 87, 87, 0.1)':''}}>
                                <img src={client.img} akt=""/>
                            <span>{client.review}</span>
                            </div>
                            
                        </SwiperSlide>
)
                })}
            </Swiper>

     
    </div>
  )
}

export default Testimonial
