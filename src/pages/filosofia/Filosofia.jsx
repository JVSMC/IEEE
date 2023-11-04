import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cards from "../../components/cards/Cards";
import cardsData from '../../dataIEEE/cardsFilosofia.json'
import { Link } from "react-router-dom";

function Filosofia() {
    return (
        <div className="spaceBtwComp sbc-s">
            <Link to = '/' className="icon-back">
                <FontAwesomeIcon icon="fa-solid fa-circle-arrow-left" />
            </Link>
            <h2 className="titleSection">Nuestra Filosofía</h2>
            <section className="cardLinksContainer centerCards">
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