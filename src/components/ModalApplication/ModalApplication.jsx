import './ModalApplicationStyles.css'
import React, { useState } from 'react';
import Krest from '../../img/Krest.svg'

const ModalApplication = (props) => {
    const [activeCheckbox, setActiveCheckbox] = useState(false);
    return(
        <div className={`ModalApplication${props.visible ? '-active' : ''}`}>
            <div className={`ModalApplication__body${props.visible ? '-active' : ''}`}>
                <div className='ModalApplication__body-header'>
                    <div className="ModalApplication__body-title">
                        Оставить заявку
                    </div>
                    <img className='ModalApplication__body-krest' src={Krest} onClick={() => props.setVisible(false)} />
                </div>
                
                <input className='ModalApplication__body-input' placeholder="Имя"></input>
                <input className='ModalApplication__body-input' placeholder="Телефон"></input>
                <div className='ModalApplication__body-container-personaldata'>
                    <div className={`ModalApplication__body-checkbox${activeCheckbox ? '-active' : ''}`} onClick={() => setActiveCheckbox(!activeCheckbox)}/>
                    <div className='ModalApplication__body-personaldata'>
                        Я согласен на обработку&nbsp;
                        <span className='ModalApplication__body-personaldata-sub'>
                            персональных данных
                        </span>
                    </div>
                </div>
                <div className="ModalApplication__body-button">
                    <div className="ModalApplication__body-button-text">
                       Оставить заявку
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalApplication