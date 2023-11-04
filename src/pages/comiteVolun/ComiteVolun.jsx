import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import dataAllMemebers from '../../dataIEEE/allMembers/allMembersIEEE.json';
import CardsLinks from "../../components/cardLink/CardsLinks";

function ComiteVolun() {
    return ( 
        <div className="spaceBtwComp sbc-s">
            <Link to = '/' className="icon-back">
                <FontAwesomeIcon icon="fa-solid fa-circle-arrow-left" />
            </Link>
            <h2 className="titleSection">Comité y voluntarios</h2>
            <p>Explora los perfiles de los apasionados miembros de IEEE Sección Guadalajara en LinkedIn y conoce más sobre quienes conforman nuestra vibrante comunidad tecnológica.</p>
            <section className="cardLinksContainer allMembers">
                {
                    dataAllMemebers.map(({id, name, position, img, url })=>(
                        <CardsLinks
                            key = {id}
                            cardName={name}
                            cardUrl={url}
                            cardPosition={position}
                            cardHide={true}
                            cardImg={img}
                        />
                    ))
                }
            </section>
        </div>
     );
}

export default ComiteVolun;