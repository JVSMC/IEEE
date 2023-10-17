import { useLocation } from "react-router-dom";
import { useEffect } from "react";

/**
 * The ScrollToTop function scrolls the window to the top whenever the location of the route changes.
 */
function ScrollToTop() {
 
        const location = useLocation();

        useEffect(() => {
            // Esta función se ejecutará cada vez que la ubicación de la ruta cambie
            window.scrollTo(0, 0);
        }, [location]); // Asegura que se ejecute cuando 'location' cambie
}

export default ScrollToTop;