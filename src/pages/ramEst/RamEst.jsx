import CardsLinks from "../../components/cardLink/CardsLinks";
import HeroHeader from "../../components/heroHeader/HeroHeader";
import heroData from '../../dataIEEE/heroHeader/dataHeroHeader.json'
import ramasEstData from '../../dataIEEE/ramasEst/ramasData.json';

function RamEstudiantil() {
    const { ramasData } = heroData;

    return (
        <>
            <HeroHeader textH2={ramasData[0]} textP={ramasData[1]} stButton={ramasData[2]} imageH={ramasData[3]} />
            <section className="spaceBtwComp sbc-s">
                <div className="cardLinksContainer sizeM">
                    {
                        ramasEstData.map(({ id, url, newsletter, img }) => (
                            <CardsLinks key={id}
                                cardName={newsletter}
                                cardUrl={url}
                                cardPosition=""
                                cardHide={false}
                                cardImg={img} />
                        ))
                    }
                </div>
            </section>

        </>
    );
}

export default RamEstudiantil;