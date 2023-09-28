import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalNavBar from "./components/globalNavBar/GlobalNavBar";
import NavBar from "./components/navbar/NavBar";
import Index from "./pages/index/Index";
import NotFound from "./pages/notFound/NotFound";
import CapTecnico from "./pages/capTec/CapTec";
import RamEstudiantil from "./pages/ramEst/RamEst";
import GrupAfinidad from "./pages/grupoAfinidad/GrupAfinidad";
import Formulario from "./components/formulario/Formulario";
import Footer from "./components/footer/Footer";



function App() {

    return ( 
        <>
            <GlobalNavBar position = 'top'/>
            <BrowserRouter>
                <NavBar/>
                <Routes>
                    <Route index element={<Index/>}/>
                    <Route path="capitulos-tecnicos" element={<CapTecnico/>}/>
                    <Route path="ramas-estudiantiles" element={<RamEstudiantil/>}/>
                    <Route path="grupos-de-afinidad" element={<GrupAfinidad/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </BrowserRouter>
            <Formulario/>
            <GlobalNavBar position='bottom' />
            <Footer/>
        </>
     );
}

export default App;