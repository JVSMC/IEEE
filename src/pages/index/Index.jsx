import HeroHeader from "../../components/heroHeader/HeroHeader";
import Formulario from "../../components/formulario/Formulario";
import GlobalNavBar from "../../components/globalNavBar/GlobalNavBar";
import Footer from "../../components/footer/Footer";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";


function Index() {

    const location = useLocation();

    useEffect(() => {
        // Esta función se ejecutará cada vez que la ubicación de la ruta cambie
        window.scrollTo(0, 0);
    }, [location]); // Asegura que se ejecute cuando 'location' cambie

    
    return (
        <>
            <HeroHeader />
            <Formulario />
            <GlobalNavBar position='bottom' />
            <Footer />
        </>

    );
}

export default Index;