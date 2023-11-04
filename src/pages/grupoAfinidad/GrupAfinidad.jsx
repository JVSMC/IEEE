import HeroHeader from "../../components/heroHeader/HeroHeader";
import heroData from '../../dataIEEE/heroHeader/dataHeroHeader.json'

function GrupAfinidad() {
    const { gruposData } = heroData;
    return ( 
        <>
            <HeroHeader textH2={gruposData[0]} textP={gruposData[1]} stButton={gruposData[2]} imageH={gruposData[3]} />
           
        </>
     );
}

export default GrupAfinidad;