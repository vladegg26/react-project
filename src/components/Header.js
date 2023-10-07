import React from 'react';
import {Link} from 'react-router-dom';




function Header() {
    return (
        <div>
            <div style={{border: "1px solid black"}}>
                <Link to='/'>Главная</Link> 
                <Link to='/table'>Таблица</Link>
                <Link to='/photo'>Фото</Link>
            </div>
        </div>
    )
}

export default Header;