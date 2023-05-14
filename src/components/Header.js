import React, { useState } from 'react';
import "../style/Header.css"
const Header = () => {
const [research, researchUpdate] = useState("")

    return (
        <header className='header'>
            
            <h1 className="header__title">
                Cooking Project
            </h1>

            <input type="text" placeholder="hello" className="header__research"/>

        </header>
    );
};

export default Header;