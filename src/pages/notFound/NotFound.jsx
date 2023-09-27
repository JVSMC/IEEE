import Footer from "../../components/footer/Footer";
import Formulario from "../../components/formulario/Formulario";
import GlobalNavBar from "../../components/globalNavBar/GlobalNavBar";

function NotFound() {
    return ( 
        <>
            <h1>404 not found</h1>
            <Formulario/>
            <GlobalNavBar position = 'bottom'/>
            <Footer/>
        </>
     );
}

export default NotFound;