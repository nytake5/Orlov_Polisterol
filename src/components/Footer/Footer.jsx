import React, { useState } from 'react';
import Whatsapp from '../../img/whatsapp.svg';
import './Footer.css'

function handleButtonClick(id, method, setActiveTab, id_Item) {
    setActiveTab(id_Item)
    const hiddenElement = document.getElementById(id)
    hiddenElement.scrollIntoView({block: method, behavior: "smooth"})
}

const about = [
    {
        id: 1,
        text: 'Контакты',
        handleId: 'Contacts_id'
    },
    {
        id: 2,
        text: 'Политика конфиденциальности',
        handleId: ''
    },
]


const Footer = () => {
    const [activeTab, setActiveTab] = useState(1);
    
    return (
        <footer className={'footer'}>
            <div className={'footer__container'}>
                <div className={'footer__list-left'}>
                    <div className={'footer__list-left-telNumber'}>+7 937 225 00 02</div>
                    <div className={'footer__list-left-whatsappIcon'}>
                        <img src={Whatsapp} alt="Prikol" /> 
                    </div>
                </div>

                <div className={'footer__list-right'}>
                    {about.map((item) => (
                        <div className={`footer__list-right-item${activeTab === item.id ? '-active' : ''}`} onClick={() => handleButtonClick(item.handleId, 'start', setActiveTab, item.id)}>
                            {item.text}
                        </div>))
                    }
                </div>
            </div>
        </footer>
    );
}

export default Footer;
