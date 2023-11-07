
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import logoIEEEWhite from '../footer/IEEE_blanco.webp';
import '../footer/Footer.css';
function Footer() {
    return (
        <>
            <footer className='layoutFooter'>
                <div>
                    <a href="/">
                        <img src={logoIEEEWhite} alt="Logo oficial IEEE Sección Guadalajara" className='logoFooter' />
                    </a>
                </div>
                <div>
                    <h4>Evento</h4>
                    <ol>
                        <li>
                            <a href="/noticias" className='linkFooter'>Noticias</a>
                        </li>
                        <li>
                            <a href="/premios" className='linkFooter'>Premios</a>
                        </li>
                    </ol>
                </div>
                <div>
                    <h4>Estructura</h4>
                    <ol>
                        <li>
                            <a href="/capitulos-tecnicos" className='linkFooter'>Capitulos técnicos</a>
                        </li>
                        <li>
                            <a href="/ramas-estudiantiles" className='linkFooter'>Ramas Estudiantlies</a>
                        </li>
                        <li>
                            <a href="/grupos-de-afinidad" className='linkFooter'>Grupos de afinidad</a>
                        </li>
                    </ol>
                </div>
                <div>
                    <h4>Redes Sociales</h4>
                    <ol className='socialContainer'>
                        <li>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faFacebook} className='socialIcon' />
                            </a>
                        </li>
                        <li>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faInstagram} className='socialIcon' />
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faXTwitter} className='socialIcon' />
                            </a>
                        </li>
                    </ol>
                </div>
            </footer>
            <p className='copyRight'>
                <a href="https://www.linkedin.com/in/javssmarc" target='_blank'>José Javier Martínez Cano </a>
                &copy; { new Date().getFullYear() }.
            </p>
        </>
    );
}

export default Footer;