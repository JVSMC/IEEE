import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import dataAllMemebers from '../../dataIEEE/allMembers/allMembersIEEE.json';
import CardsLinks from "../../components/cardLink/CardsLinks";

function ComiteVolun() {
    return ( 
        <div className="spaceBtwComp sbc-s">
            <Link to = '/' className="icon-back-t">
                <FontAwesomeIcon icon="fa-solid fa-circle-arrow-left" />
            </Link>
            <h2 className="titleSection-t">Comité y voluntarios</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis ex reprehenderit quia eligendi unde velit numquam, minus maiores quisquam fugit.</p>
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