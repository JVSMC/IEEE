import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../cards/Cards.css';


function Cards({cardIcon, cardTitle, cardText, cardUrl, stButton}) {
    return (
        <div className="cardContainer">
            <div className='cardTitle'>
                <FontAwesomeIcon icon={cardIcon} className="cardIcon"/>
                <h3>{cardTitle}</h3>
            </div>
            <p>{cardText}</p>
            <Link to={cardUrl} style={{ display: stButton ? 'block' : 'none' }} className="KnowMore">Saber más</Link>
        </div>
    );
}

export default Cards;