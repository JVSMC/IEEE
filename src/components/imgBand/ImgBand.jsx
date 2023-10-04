import { Link } from "react-router-dom";
import '../imgBand/ImgBand.css';


function ImgBand({ bandTitle, bandText, bandUrl, bandImg }) {
    return (
        <div className="band">
            <div>
                <h2>{bandTitle}</h2>
                <p>{bandText}</p>
                <Link to={bandUrl} className="KnowMore">Saber Más</Link>
            </div>
            <img src={bandImg} alt="Guadalajara, Jalisco IEEE Sección Guadalajara" />
        </div>
    );
}

export default ImgBand;