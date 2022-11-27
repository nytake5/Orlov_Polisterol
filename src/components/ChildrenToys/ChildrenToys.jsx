import './ChildrenToysStyles.css'
import ModalApplication from '../ModalApplication/ModalApplication';
import React, { useState } from 'react';

const ChildrenToys = () => {
    const [modalApp, setModalApp] = useState(false);

    const EventToVisibleModal = () => {
        setModalApp(true);
    }
    return (
        <div className="ChildrenToys">
            <ModalApplication visible={modalApp} setVisible={setModalApp}/>
            <div className="ChildrenToys__body">
                <div className="ChildrenToys__body-title">
                    Детские игрушки
                </div>
                <div className="ChildrenToys__body-text">
                    Полистирол – безопасный материал для детей, не подверженный отсыреванию и деформации. Мягкие игрушки с наполнителем 
                    из полистирола необычайно легкие, мягкие
                    и приятные на ощупь. Мы изготавливаем игрушки под заказ в необходимом размере, форме и дизайне.
                </div>
                <div className='ChildrenToys__body-modal' onClick={() => EventToVisibleModal()}>
                    Оставить заявку
                </div>
            </div>
        </div>
    );
}

export default ChildrenToys;