import React, { useState } from 'react';
import './Header.css';

function handleButtonClick(id, method, setActiveTab, id_Item) {
    setActiveTab(id_Item)
    const hiddenElement = document.getElementById(id)
    hiddenElement.scrollIntoView({block: method, behavior: "smooth"})
}

const about = [
    {
        id: 1,
        text: 'Полистирол',
        handleId: 'Polisterol_id'
    },
    {
        id: 2,
        text: 'Характеристики',
        handleId: 'Specifications_id'
    },
    {
        id: 3,
        text: 'Изделия',
        handleId: 'Productions_id'
    },
]

const Header = () => {
    const [activeTab, setActiveTab] = useState(1);
    
    return (
        <header className={'header'}>
            <div className={'header__container'}>
                {about.map((item) => (
                    <div className={`header__item${activeTab === item.id ? '-active' : ''}`} onClick={() => handleButtonClick(item.handleId, 'start', setActiveTab, item.id)}>
                        {item.text}
                    </div>
                ))}
            </div>
        </header>
    );
};

export default Header;
