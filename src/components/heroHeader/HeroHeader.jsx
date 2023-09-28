import '../heroHeader/HeroHeader.css';
import imgHero from '../heroHeader/matthew-osborn-wMRIcT86SWU-unsplash.webp'


function HeroHeader() {
    return ( 
        <section className='heroContainer'>
            <div className='heroLeft'>
                <div className='heroTextContainer'>
                    <h1>
                        Eleva tu carrera profesional al siguiente nivel
                    </h1>
                    <p>
                        Mediante la promoción y aplicación de la ciencia y tecnología, nuestro enfoque en el beneficio comunitario te brindará oportunidades únicas para crecer.
                    </p>
                    <button>Comenzar a Aprender</button>
                </div>
                <div className='heroDivisor'></div>
            </div>
            <div className='heroImageContainer'>
                <img src={imgHero} alt="Charlas IEEE Sección Guadalajara"/>
            </div>
        </section>
     );
}

export default HeroHeader;