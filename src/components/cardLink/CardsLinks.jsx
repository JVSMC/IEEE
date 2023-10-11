import '../cardLink/CardsLinks.css';
function CardsLinks({newsUrl, newsLogo}) {
    return ( 
        <div className="cardLink">
            <a href={newsUrl} target='_blank'>Saber más</a>
        </div>
     );
}

export default CardsLinks;