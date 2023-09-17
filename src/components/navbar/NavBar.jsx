import '../navbar/NavBar.css';
import logo from '../globalNavBar/IEEE_MB_white_RGB_72ppi.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

function NavBar() {
    return ( 
        <nav className='navbar'>
            <h1>
                <span className='navTitle'>
                    IEEE
                </span>
                <span>
                    Guadalajara
                </span>
            </h1>
            <div className='menu'>
                <ol>
                    Inicio
                </ol>
                <ol>
                    Eventos
                    <FontAwesomeIcon className="toggle" icon={faChevronDown} />
                </ol>
                <ol>
                    Estructura
                    <FontAwesomeIcon className="toggle" icon={faChevronDown} />
                </ol>
                <ol>
                    Contacto
                </ol>
            </div>
            <img src={logo} alt="IEEE" />
        </nav>
     );
}

export default NavBar;