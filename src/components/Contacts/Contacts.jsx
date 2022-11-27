import './Contacts.css'
import Contacts1 from '../../img/Contacts1.png'
import Contacts2 from '../../img/Contacts2.png'
import Arrow from '../../img/Arrow2.svg'
import React, { useState } from 'react';
import Krest from '../../img/Krest2.svg'


const Contacts = () => {
    const [visible, setVisible] = useState(0);
    function handlleButtonArrow(){
        setVisible(!visible)
    }
    return (
        <div className="Contacts" id="Contacts_id">
            <div className="Contacts__image">
                <img className='Contacts__image-real' src={`${visible ? Contacts2 : Contacts1}`} alt="" />
            </div>
            <div className="Contacts__Arrow" onClick={() => handlleButtonArrow()}>
                <img src={Arrow} alt="" />
            </div>
            <div className={`Contacts__Krest${visible ? '-active' : ''}`} onClick={() => handlleButtonArrow()}>
                <img src={Krest} alt="" />
            </div>
            <div className={`Contacts__body${visible ? '-active' : ''}`}>
                <div className="Contacts__body-title">  
                    Контакты
                </div>
                <div className="Contacts__body-container-top">
                    <div className="Contacts__body-container-item">
                        <span className="Contacts__body-container-item-head">
                        Офис:&nbsp;
                        </span>
                        г. Саратов, пр-т 50 лет Октября, д. 101
                    </div>
                    <div className="Contacts__body-container-item">
                        <span className="Contacts__body-container-item-head">
                        Склад:&nbsp;
                        </span>
                        Саратовская обл., пос. Зоринский, ул. Дорожная, д. 19
                    </div>
                    <div className="Contacts__body-container-item">
                        <span className="Contacts__body-container-item-head">
                        E-mail: &nbsp;
                        </span>
                        stanislavmukamaev@yandex.ru
                    </div>
                    
                </div>

                <div className="Contacts_body-container-bot">
                    <div className="Contacts__body-container-item">
                        <span className="Contacts__body-container-item-head">
                        Технический/коммерческий директор:&nbsp;
                        </span>
                        +7(937)225-00-02
                    </div>
                    <div className="Contacts__body-container-item">
                        <span className="Contacts__body-container-item-head">
                        Отдел продаж:&nbsp;
                        </span>
                        +7(927)226-90-00
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contacts;