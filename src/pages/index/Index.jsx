import HeroHeader from "../../components/heroHeader/HeroHeader";

// import { useLocation } from "react-router-dom";
// import { useEffect } from "react";


function Index() {

    // const location = useLocation();

    // useEffect(() => {
    //     // Esta función se ejecutará cada vez que la ubicación de la ruta cambie
    //     window.scrollTo(0, 0);
    // }, [location]); // Asegura que se ejecute cuando 'location' cambie

    
    return (
        <>
            <HeroHeader />            
        </>

    );
}

export default Index;