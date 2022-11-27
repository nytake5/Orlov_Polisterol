import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './PolisterolStyles.css';
import { footerList } from '../../constants';
import Arrow from '../../img/Arrow.svg'
import ModalApplication from '../ModalApplication/ModalApplication';
import React, { useState } from 'react';


const Polisterol = () => {
    const [modalApp, setModalApp] = useState(false);

    const EventToVisibleModal = (value) => {
        setModalApp(value);
    }

    return (
        <div className={'Polisterol'} id="Polisterol_id">
            <ModalApplication visible={modalApp} setVisible={setModalApp}/>
            
            <div className="Polisterol__body">
                <div className="Polisterol__body-text">
                    Полистирол 
                    <br/> 
                    общего назначения
                </div>
                <div className="Polisterol__body-cost">
                    Цена <span className="Polisterol__cost-count">230₽</span>  без НДС
                </div>
                <div className="Polisterol__body-modal">
                    <div className='Polisterol__body-modal-text' onClick={() => EventToVisibleModal(true)}>
                        Оставить заявку
                    </div>
                </div> 
            </div>
               
            <div className="Polisterol__list">
                {footerList.map(({ id, imageLink, text }) => (
                    <div className="Polisterol__list-item" key={id}>
                        <img src={imageLink} alt="" className="Polisterol__list-item-icon" />
                        <span className="Polisterol__list-item-title">{text}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
 
export default Polisterol;