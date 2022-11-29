import './ModalSpecificationStyles.css'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide, useSwiperSlide  } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { swiperList } from '../../constants';
import Krest from '../../img/Krest.svg'
import React, { useEffect } from 'react';
import Krug from '../../img/Krug.png'
import { Virtual } from 'swiper';

const ModalSpecification = (props) => {
    return (
        <div className={`ModalSpecification${props.visible ? '-active' : ''}`}>
            <div className={`ModalSpecification__body${props.visible ? '-active' : ''}`}>
            <img className='ModalSpecification__body-krest' src={Krest} onClick={() => props.setVisible(false)} />
            <Swiper
                className='ModalSpecification__body-swipper'
                slidesPerView={7}
                spaceBetween={40}
                loop
            >
                {swiperList.map(item => (
                    <SwiperSlide className='ModalSpecification__body-swipper-slide'>
                        {({ isActive }) => 
                            <div className={`ModalSpecification__body_swipper-item${isActive ? '-active' : ''}`}>
                                <div className="ModalSpecification__body_swipper-item-head">
                                    {item.leftText}
                                </div>
                                <div className="ModalSpecification__body_swipper-item-value">
                                    {item.centerText}
                                </div>  
                                { isActive && <img src={Krug}/>}
                            </div>
                        }
                    </SwiperSlide>
                ))}
            </Swiper>    
            </div>
        </div>
    );
}

export default ModalSpecification; 