import './SpecificationsStyles.css';
import Arrow from '../../img/Arrow.svg';
import ModalApplication from '../ModalApplication/ModalApplication';
import React, { useState } from 'react';
import ModalSpecification from '../ModalSpecification/ModalSpecification';

const Specifications = () => {
    const [modalApp, setModalApp] = useState(false);
    const [modalSpec, setModalSpec] = useState(false);

    const EventToVisibleModal = (value) => {
        console.log(value);
        setModalApp(value);
    }

    const EventToVisibleModalSpec = (value) => {
        console.log(value);
        setModalSpec(value);
    };

    return (
        <div className="Specifications" id="Specifications_id">
            <ModalApplication visible={modalApp} setVisible={setModalApp}/>
            <ModalSpecification visible={modalSpec} setVisible={setModalSpec}/>
            <div className='Specifications__body'>
                <div className='Specifications__body-title'>
                    GPPS G-144 HDS HYUNDAY EP
                </div>
                <div className="Specifications__body-top-container">
                    <div className="Specifications__body-item">
                        <span className={'Specifications__body-item-head'}>
                            Производитель: 
                        </span>
                        &nbsp;Hundai Enginnering Plastics
                    </div>
                    <div className="Specifications__body-item">
                        <span className={'Specifications__body-item-head'}>
                            Форма выпуска:	
                        </span>
                        &nbsp;Гранулы
                    </div>
                    <div className="Specifications__body-item">
                        <span className={'Specifications__body-item-head'}>
                            Условия доставки:
                        </span>
                        &nbsp;самовывоз со склада в Саратове
                    </div>
                    <div className="Specifications__body-item">
                        <span className={'Specifications__body-item-head'}>
                            Форма отплаты:
                        </span>
                        &nbsp;предоплата 100%
                    </div>
                </div>
                <div className="Specifications__body-bottom-container">
                    <div className="Specifications__body-item">
                        <span className={'Specifications__body-item-head'}>
                            Температура размегчения по Вика, С°:
                        </span>
                        &nbsp;не ниже	96°
                    </div>
                    <div className="Specifications__body-item">
                        <span className={'Specifications__body-item-head'}>
                            Показатель текучести расплава, г/10 мин (при 200°С и 5 кг):
                        </span>
                        &nbsp;8.5
                    </div>
                    <div className="Specifications__body-item">
                        <span className={'Specifications__body-item-head'}>
                            Воспламеняемость, мм/мин:
                        </span>
                        &nbsp;не болеe HB
                    </div>
                    <div className="Specifications__body-item">
                        <span className={'Specifications__body-item-head'}>
                            Модуль изгиба, МПа:
                        </span>
                        &nbsp;3.040
                    </div>
                </div>
            </div>
            <div className="Specifications__container-bot">
                <div className="Specifications__container-detailed" onClick={() => EventToVisibleModalSpec(true)}>
                    Подробные характеристики&nbsp;
                    <img className='Specifications__container-detailed-arrow' src={Arrow} alt="" />
                </div>
                <div className="Specifications__container-application" onClick={() => EventToVisibleModal(true)}>
                    Оставить заявку
                </div>
            </div>
        </div>
    );
}

export default Specifications;