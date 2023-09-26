import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

import '../navbar/NavBar.css';
import logo from '../globalNavBar/IEEE_MB_white_RGB_72ppi.webp';

function NavBar() {

    const [isActive, setIsActive] = useState(false);
    
    const handleGNav = ()=>{
        // Verifica el estado actual de gNav y cambia la clase en función de eso
        setIsActive(!isActive);
    }

    return (
        <nav className='navbar'>
            <ul className='logoLink'>
                <li>
                    <NavLink to='/' className={({isActive})=>{isActive ? 'active' : ''}}>
                        <h1>
                            <span className='navTitle'>IEEE</span>
                            <span>Guadalajara</span>
                        </h1>
                    </NavLink>
                </li>
            </ul>
            <ul className={`menu ${isActive ? 'active' : ''}`}>
                <li>
                    <NavLink to='/' className='menuUrl'>Inicio</NavLink>
                </li>
                <li className='dropDown'>
                    <div className='dropBtn'>
                        Eventos
                        <FontAwesomeIcon className="icon-menu" icon={faChevronDown} />
                    </div>
                    <div className='dropdown-content'>
                        <NavLink to='/calendario' className='menuUrl'>Calendario</NavLink>
                        <NavLink to='/noticias' className='menuUrl'>Noticias</NavLink>
                        <NavLink to='/premios' className='menuUrl'>Premios</NavLink>
                    </div>
                </li>
                <li className='dropDown'>
                    <div className='dropbtn'>
                        Estructura
                        <FontAwesomeIcon className="icon-menu" icon={faChevronDown} />
                    </div>
                    <div className='dropdown-content'>
                        <NavLink to='/capitulos-tecnicos' className='menuUrl'>Capítulos técnicos</NavLink>
                        <NavLink to='/ramas-estudiantiles' className='menuUrl'>Ramas estudiantiles</NavLink>
                        <NavLink to='/grupos-de-afinidad' className='menuUrl'>Grupos de afinidad</NavLink>
                    </div>
                </li>
                <li>
                    <a href="#ContactUs" className='menuUrl'>Contacto</a>
                </li>
            </ul>
            <img src={logo} alt="IEEE" />
            <FontAwesomeIcon icon={faBars} className="icon-menu menuBars" onClick={handleGNav}/>
        </nav>
    );
}

export default NavBar;