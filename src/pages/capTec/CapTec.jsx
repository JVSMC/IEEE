import Cards from "../../components/cards/Cards";

import HeroHeader from "../../components/heroHeader/HeroHeader";
import heroData from '../../dataIEEE/heroHeader/dataHeroHeader.json';
import capitulosTec from '../../dataIEEE/capitulosTec/capitulosTec.json'

function CapTecnico() {
    const { capitulosData } = heroData;

    return (
        <>
            <HeroHeader textH2={capitulosData[0]} textP={capitulosData[1]} stButton={capitulosData[2]} imageH={capitulosData[3]} />
            <section className="spaceBtwComp sbc-s">
                <div className="cardLinksContainer sizeM">
                {
                    capitulosTec.map(({ id, icon, title, text, url, stButton }) =>
                        <Cards
                            key={id}
                            cardIcon={icon}
                            cardTitle={title}
                            cardText={text}
                            cardUrl={url}
                            stButton={stButton}
                        />
                    )
                }
                </div>
            </section>
        </>
    );
}

export default CapTecnico;