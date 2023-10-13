import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import '../imgSlider/ImgSlider.css'

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

import membersData from '../../dataIEEE/membersIEEEIndex.json'


function ImgSlider() {

    return (
        <>
            <h2 className="titleSection">Nuestros Miembros Principales</h2>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                {
                    membersData.map(({ id, name, position, url, img }) => (
                        <SwiperSlide key ={id} style={{ backgroundImage: `url(${img})` }}>
                            {/* <img src={img} /> */}
                            <div className='infoMember'>
                                <a href={url} target='_blank'>
                                    <h4>{name}</h4>
                                </a>
                                <p>{position}</p>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </>
    );
}

export default ImgSlider;