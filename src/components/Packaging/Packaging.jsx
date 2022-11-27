import './PackagingStyles.css';
import ModalApplication from '../ModalApplication/ModalApplication';
import React, { useState } from 'react';

const Packaging = () => {
    const [modalApp, setModalApp] = useState(false);

    const EventToVisibleModal = () => {
        setModalApp(true);
    }
    return (
        <div className="Packaging">
            <ModalApplication visible={modalApp} setVisible={setModalApp}/>
            <div className="Packaging__body">
                <div className="Packaging__body-title">
                    Упаковка   
                </div>
                <div className="Packaging__body-text">
                    Упаковка из полистирола идеально подходит для хранения пищевых продуктов, за счет безопасного состава и устойчивости к низким температурам.
                    Вспененный полистирол применяется для упаковки и транспортировки хрупких товаров. 
                    В нашей компании возможно изготовление полистироловой упаковки для любой продукции. 
                </div>
                <div className='Packaging__body-modal' onClick={() => EventToVisibleModal()}>
                    Оставить заявку
                </div>
            </div>
        </div>
    );
}

export default Packaging;