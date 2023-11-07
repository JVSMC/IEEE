import '../cardLink/CardsLinks.css';

function CardsLinks({ cardName, cardUrl, cardPosition, cardHide, cardImg }) {
    return (
        <div className="cardLink infoMember" style={{
            background: `url(${cardImg}) center/cover no-repeat, #00AEEF`
        }}>
            <div>
                <a href={cardUrl} target='_blank'>
                    <h4>{cardName}</h4>
                </a>
                <p style={{ display: cardHide ? 'block' : 'none' }}>{cardPosition}</p>
            </div>
        </div>
    );
}

export default CardsLinks;
