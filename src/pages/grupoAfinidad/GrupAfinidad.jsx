import Footer from "../../components/footer/Footer";
import Formulario from "../../components/formulario/Formulario";
import GlobalNavBar from "../../components/globalNavBar/GlobalNavBar";

function GrupAfinidad() {
    return ( 
        <>
            <h1>Grupos de afinidad</h1>
            <Formulario/>
            <GlobalNavBar position = 'bottom'/>
            <Footer/>
        </>
     );
}

export default GrupAfinidad;