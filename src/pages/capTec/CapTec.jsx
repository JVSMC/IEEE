import HeroHeader from "../../components/heroHeader/HeroHeader";
import heroData from '../../dataIEEE/heroHeader/dataHeroHeader.json';

function CapTecnico() {
    const { capitulosData } = heroData;

    return (
        <>
            <HeroHeader textH2={capitulosData[0]} textP={capitulosData[1]} stButton={capitulosData[2]} imageH={capitulosData[3]} />
            <section style={{
                height: '100vh'
            }}>  

            </section>
        </>
    );
}

export default CapTecnico;