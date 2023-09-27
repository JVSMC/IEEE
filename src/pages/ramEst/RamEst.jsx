import Footer from "../../components/footer/Footer";
import Formulario from "../../components/formulario/Formulario";
import GlobalNavBar from "../../components/globalNavBar/GlobalNavBar";

function RamEstudiantil() {
    return ( 
        <>
            <h1>Rama estudiantil</h1>
            <Formulario/>
            <GlobalNavBar position = 'bottom'/>
            <Footer/>
        </>
     );
}

export default RamEstudiantil;