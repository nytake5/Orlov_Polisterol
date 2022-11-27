import './ProductionsStyles.css';
import ModalApplication from '../ModalApplication/ModalApplication';
import React, { useState } from 'react';
import ModalSpecification from '../ModalSpecification/ModalSpecification';

const Productions = () => {
    const [modalApp, setModalApp] = useState(false);

    const EventToVisibleModal = () => {
        setModalApp(true);
    }
    return (
        <div className="Productions" id="Productions_id">
            <ModalApplication visible={modalApp} setVisible={setModalApp}/>

            <div className="Productions__body">
                <div className="Productions__body-title">
                    Медицинские изделия
                </div>
                <div className="Productions__body-text">
                    Медицинские и фармацевтические компании используют полистирол для изготовления специализированной тары, упаковки, одноразовых инструментов. 
                    Данный материал безопасен по своему составу, обладает устойчивостью к перепадам температур и высокой пластичностью.
                </div>
                <div className='Productions__body-modal' onClick={() => EventToVisibleModal()}>
                    Оставить заявку
                </div>
            </div>
        </div>
    );
}

export default Productions;