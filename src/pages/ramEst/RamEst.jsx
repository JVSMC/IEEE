import HeroHeader from "../../components/heroHeader/HeroHeader";
import heroData from '../../dataIEEE/heroHeader/dataHeroHeader.json'

function RamEstudiantil() {
    const { ramasData } = heroData;
   
    return ( 
        <>
            <HeroHeader textH2={ramasData[0]} textP={ramasData[1]} stButton={ramasData[2]} imageH={ramasData[3]} />
           
        </>
     );
}

export default RamEstudiantil;