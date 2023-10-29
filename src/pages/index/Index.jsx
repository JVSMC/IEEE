import CardsLinks from "../../components/cardLink/CardsLinks";
import Cards from "../../components/cards/Cards";
import HeroHeader from "../../components/heroHeader/HeroHeader";
import ImgBand from "../../components/imgBand/ImgBand";
import ImgMoreInfo from "../../components/imgMoreInfo/ImgMoreInfo";
import ImgSlider from "../../components/imgSlider/ImgSlider";

import cardsData from '../../dataIEEE/cardsIndexPlan.json';
import bandData from '../../dataIEEE/historia.json';
import newsData from '../../dataIEEE/news/newsData.json';
import heroData from '../../dataIEEE/heroHeader/dataHeroHeader.json';

function Index() {

    const { indexData } = heroData;
    return (
        <>
            <HeroHeader textH2={ indexData[0] } textP={indexData[1]} stButton={indexData[2]} imageH={indexData[3]} />
            <section className="cardsContainer">
                {
                    cardsData.map(({ id, icon, title, text, url, stButton }) =>
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
            </section>
            <section className="spaceBtwComp">
                {
                    bandData.map(({ id, title, text, url, img }) => (
                        <ImgBand
                            key={id}
                            bandTitle={title}
                            bandText={text}
                            bandUrl={url}
                            bandImg={img}
                        />
                    ))
                }
            </section>
            <section className="spaceBtwComp">
                <ImgSlider />
            </section>
            <section className="spaceBtwComp imgMoreInf">
                <ImgMoreInfo />
            </section>
            <section className="spaceBtwComp" id='News'>
                <h2 className="titleSection">IEEE Sección Guadalajara En Las Noticias</h2>
                <div className="cardLinksContainer centerCards">
                    {
                        newsData.map(({id, url, newsletter, img})=>(
                            <CardsLinks key={id} 
                                cardName={newsletter} 
                                cardUrl = {url}
                                cardPosition="" 
                                cardHide={false} 
                                cardImg = {img}/>
                        ))
                    }
                </div>
            </section>
        </>
    );
}

export default Index;