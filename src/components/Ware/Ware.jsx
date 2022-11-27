import './WareStyles.css';
import ModalApplication from '../ModalApplication/ModalApplication';
import React, { useState } from 'react';

const Ware = () => {
    const [modalApp, setModalApp] = useState(false);

    const EventToVisibleModal = () => {
        setModalApp(true);
    }
    return (
        <div className="Ware">
            <ModalApplication visible={modalApp} setVisible={setModalApp}/>
            <div className="Ware__body">
                <div className="Ware__body-title">
                    Одноразовая посуда
                </div>
                <div className="Ware__body-text">
                    Посуда из полистирола отлично удерживает тепло, подходит для СВЧ-печей, обладает высокой прочностью и привлекательным внешним видом. 
                    В нашей компании есть возможность изготовления одноразовой посуды из полистирола различного цвета и дизайна.
                </div>
                <div className='Ware__body-modal' onClick={() => EventToVisibleModal()}>
                    Оставить заявку
                </div>
            </div>
        </div>
    );
}

export default Ware;