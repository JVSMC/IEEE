import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function HistoriaIEEE() {

    return (
        <div className="spaceBtwComp sbc-s">
            <Link to='/' className="icon-back">
                <FontAwesomeIcon icon="fa-solid fa-circle-arrow-left" />
            </Link>
            <h2 className="titleSection">Historia del  <strong>IEEE</strong> en Jalisco </h2>
            <p><em>Por el Ing. Ernesto Sánchez Proal</em></p>
            <br />
            <p>
                <em>
                    El Instituto de Ingenieros en Electricidad y Electrónica
                </em> (IEEE por sus siglas en inglés) es la sociedad profesional técnica más grande del mundo. Se funda en Nueva York en 1884 cuando la mayor industria eléctrica era el telégrafo y en un lejano segundo lugar la electricidad para luz y potencia.
            </p>
            <br />
            <p>
                Sus <em>375,000 miembros</em> se ubican en <em>10</em> regiones a nivel global, actualmente más del <em>45%</em> de los mismos están localizados fuera de Estados Unidos. México está dentro de la región 9 y la zona de Occidente de nuestro país agrupa a los miembros en la Sección Guadalajara, con <em>203</em> miembros activos actualmente.
            </p>
            <br />
            <p>
                Cien años después de la fundación original del IEEE, en 1984, el liderazgo y la iniciativa del Ingeniero <em>Eduardo Souza Dueñas</em> consigue organizar a un grupo de compañeros de profesión para constituir en aquel entonces la <em>“Sub-Sección” Guadalajara</em>. Durante ocho años funcionó como tal, hasta que el 15 de Agosto de 1990 se elevó al grado de Sección. Sin embargo desde su origen  en Guadalajara el IEEE  ha tenido una influencia significativa en la comunidad de Ingenieros Eléctricos y Electrónicos.
            </p>
            <br />
            <p>
                Un ejemplo interesante es la reunión de estudiantes que se realizó en 1985, cuando lograron convocarse bajo el mismo techo a instituciones educativas de esta región que durante años habían mantenido un antagonismo entre sí. Entonces participaron en el evento la U. de G., la U.A.G. y el ITESO, entre otras instituciones.
            </p>
            <br />
            <p>
                Al inicio el perfil del Instituto en Guadalajara estuvo muy orientado a la disciplina de la Ingeniería Eléctrica, agrupando entre sus miembros a personalidades de la profesión, además del <em>Ing. Souza</em>,  como el <em>Ing. José Manuel Cruz, el Ing. Ernesto Sánchez Anguiano y el Ing. Gustavo Oropeza</em>, por mencionar a algunos. Al paso del tiempo y con el surgimiento del Valle del Silicio Mexicano en la zona metropolitana de Guadalajara, la Ingeniería Electrónica comenzó a tener más presencia en el Instituto. Se agremian entonces talentos como el <em>Ing. Bernardo Cotero, el Ing. Rodolfo Casillas Alarcón, el Ing. Antonio Barriga y el Ing. Francisco Martínez</em> quien posteriormente fue presidente de la Región 9.
            </p>
            <br />
            <p>
                Es importante resaltar el balance entre la academia y la industria que ha conseguido el Instituto, puesto que ambos sectores han aportado y siguen aportando mucho a la profesión. Así, vemos que en los últimos años la presidencia de la Sección ha estado en algunos años a cargo de académicos, como el <em>Dr. Juan Manuel Hernández Cid o la Maestra en Ciencias Araceli García</em>; en otros años a cargo de Industriales como el <em>Ing. Iván Jileta o el Maestro en Ciencias y Administración Rodolfo Casillas Alarcón</em>.
            </p>
            <br />
            <p>
            Otro dato interesante es el apoyo al Instituto por parte de generaciones posteriores de Ingenieros, que siguieron a los fundadores. Tenemos el caso del <em>Ing. Carlos Nafarrate</em>, presidente en 1986 y el <em>Ing. Ernesto Sánchez Anguiano</em>, presidente en 1988: doces años después, sus hijos los <em>Ingenieros Gabriel Nafarrate y Ernesto Sánchez Proal</em> ocuparon la presidencia de la Sección en 1998 y 2000 respectivamente.
            </p>
            <br />
            <p>
            Actualmente el IEEE Sección Guadalajara está más fuerte que nunca, enfocado y trabajando duro en su misión: <strong>apoyar el avance de la tecnología eléctrica y electrónica para mejorar la vida de la gente</strong>.
            </p>
        </div>
    );
}

export default HistoriaIEEE;