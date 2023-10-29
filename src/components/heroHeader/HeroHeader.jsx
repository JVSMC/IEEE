import '../heroHeader/HeroHeader.css';

function HeroHeader({textH2, textP, stButton, imageH }) {
    return ( 
        <section className='heroContainer'>
            <div className='heroLeft'>
                <div className='heroTextContainer'>
                    <h1>{textH2}</h1>
                    <p>{textP}</p>
                    <button style={{ display: stButton ? 'block' : 'none' }}>Comenzar a Aprender</button>
                </div>
                <div className='heroDivisor'></div>
            </div>
            <div className='heroImageContainer' 
                style={{
                    background: `url(${imageH}) center/cover no-repeat, #00AEEF`
                }}
            >
                {/* <img src={imageH} alt="Charlas IEEE Sección Guadalajara"/> */}
            </div>
        </section>
     );
}

export default HeroHeader;