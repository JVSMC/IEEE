import Cards from "../../components/cards/Cards";
import cardsData from '../../dataText/cardsFilosofia.json'

function Filosofia() {
    return (
        <div className="spaceBtwComp">
            <h2 className="titleSection">Nuestra Filosofía</h2>
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
        </div>
    );
}

export default Filosofia;