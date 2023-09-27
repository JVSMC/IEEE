import Footer from "../../components/footer/Footer";
import Formulario from "../../components/formulario/Formulario";
import GlobalNavBar from "../../components/globalNavBar/GlobalNavBar";

function CapTecnico() {
    return ( 
        <>
            <h1>Capitulo tecnico</h1>
            <Formulario/>
            <GlobalNavBar position = 'bottom'/>
            <Footer/>
        </>
     );
}

export default CapTecnico;