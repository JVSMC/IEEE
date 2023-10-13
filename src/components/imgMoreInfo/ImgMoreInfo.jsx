import '../imgMoreInfo/ImgMoreInfo.css';
import imgState from '../imgMoreInfo/JNZ_2_animated.svg';
import counterMembersData from '../../dataIEEE/counterMembers.json';

function ImgMoreInfo() {
    return (
        <>
            <div className='textDescript'>
                <div>
                    <h2>Descubre la Fuerza de la Comunidad IEEE Sección Guadalajara</h2>
                    <p>Sumérgete en la vibrante red de miembros de la IEEE Sección Guadalajara, extendida por Jalisco, Nayarit y Zacatecas. Conoce la diversidad y experiencia que impulsan la innovación tecnológica.</p>
                    <button><a href="https://rosters.ieee.org/home.html">Ver rosters</a></button>
                </div>
                <img src={imgState} alt="IEEE Sección Guadalajara Estados" title='IEEE Sección Guadalajara Estados' />
            </div>
            <div className='counterContainer'>
                {
                    counterMembersData.map(({id, noMembers, position }) => (
                        <div key = {id}>
                            <h3>{noMembers}</h3>
                            <h4>{position}</h4>
                        </div>
                    ))
                }
            </div>
        </>
    );
}

export default ImgMoreInfo;