import Cards from "../../components/cards/Cards";
import HeroHeader from "../../components/heroHeader/HeroHeader";
import ImgBand from "../../components/imgBand/ImgBand";

import cardsData from '../../dataText/cardsIndexPlan.json';
import bandData from '../../dataText/historia.json';


function Index() {

    const topic = 'Eleva tu carrera profesional al siguiente nivel';
    const infoText = 'Mediante la promoción y aplicación de la ciencia y tecnología, nuestro enfoque en el beneficio comunitario te brindará oportunidades únicas para crecer.';
    const stButton = true;
    const pathImage = 'src/dataText/img/matthew-osborn-wMRIcT86SWU-unsplash.webp';
   

    return (
        <>
            <HeroHeader textH2={topic} textP={infoText} stButton={stButton} imageH={pathImage} />
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

        </>
    );
}

export default Index;