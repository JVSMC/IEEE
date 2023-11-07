import Cards from "../../components/cards/Cards";

import HeroHeader from "../../components/heroHeader/HeroHeader";
import heroData from '../../dataIEEE/heroHeader/dataHeroHeader.json';
import grupoData from '../../dataIEEE/gruposAfinidad/gruposData.json'

function GrupAfinidad() {
    const { gruposData } = heroData;
    return (
        <>
            <HeroHeader textH2={gruposData[0]} textP={gruposData[1]} stButton={gruposData[2]} imageH={gruposData[3]} />
            <section className="spaceBtwComp sbc-s">
                <div className="cardLinksContainer sizeM">
                {
                    grupoData.map(({ id, icon, title, text, url, stButton }) =>
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

export default GrupAfinidad;