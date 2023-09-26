import React, { useState } from 'react';
import '../globalNavBar/GlobalNavBar.css';
import logo from '../globalNavBar/IEEE_MB_white_RGB_72ppi.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';


function GlobalNavBar({position}) {

    const navStyle = {
        // Estilos específicos para la posición 'top'
        ...(position === 'top' && {
          backgroundColor:'#717073',
          // Otros estilos específicos para 'top' aquí...
        }),
    
        // Estilos específicos para la posición 'bottom'
        ...(position === 'bottom' && {
          backgroundColor: '#0073AE',
          // Otros estilos específicos para 'bottom' aquí...
        }),
      };

    const [isActive, setIsActive] = useState(false);
    
    const handleGNav = ()=>{
        // Verifica el estado actual de gNav y cambia la clase en función de eso
        setIsActive(!isActive);
    }

    return (
        <div className="navG" style ={navStyle}>
            <div className={`navGOp ${isActive ? 'active' : ''}`}>
                <ul><a href="https://www.ieee.org/" target='_blank'>IEEE.org</a></ul>
                <ul><a href="https://ieeexplore.ieee.org/Xplore/home.jsp" target='_blank'>IEEE Xplore Digital Library</a></ul>
                <ul><a href="https://standards.ieee.org/" target='_blank'>IEEE Standards </a></ul>
                <ul><a href="https://spectrum.ieee.org/" target='_blank'>IEEE Spectrum </a></ul>
                <ul><a href="https://www.ieee.org/sitemap.html" target='_blank'>More Sites</a></ul>
            </div>
            <div className="logoContainer" onClick={handleGNav}>
                <img src={logo} alt="IEEE" />
                <FontAwesomeIcon className="icon-menu" icon={faChevronDown} />
            </div>
        </div>
    );
}

export default GlobalNavBar;