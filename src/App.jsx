import { BrowserRouter, Route, Routes } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

import GlobalNavBar from "./components/globalNavBar/GlobalNavBar";
import NavBar from "./components/navbar/NavBar";
import Index from "./pages/index/Index";
import NotFound from "./pages/notFound/NotFound";
import CapTecnico from "./pages/capTec/CapTec";
import RamEstudiantil from "./pages/ramEst/RamEst";
import GrupAfinidad from "./pages/grupoAfinidad/GrupAfinidad";
import Formulario from "./components/formulario/Formulario";
import Footer from "./components/footer/Footer";
import ScrollToTop from "./helpers/ScrollToTop";
import Filosofia from "./pages/filosofia/Filosofia";
import ComiteVolun from "./pages/comiteVolun/ComiteVolun";



// This exports the whole icon packs for Brand and Solid.
library.add(fab, fas)



function App() {
    return ( 
        <>
            <GlobalNavBar position = 'top'/>
            <BrowserRouter>
            <ScrollToTop/>
                <NavBar/>
                <Routes>
                    <Route index element={<Index/>}/>
                    <Route path="capitulos-tecnicos" element={<CapTecnico/>}/>
                    <Route path="ramas-estudiantiles" element={<RamEstudiantil/>}/>
                    <Route path="grupos-de-afinidad" element={<GrupAfinidad/>}/>
                    <Route path="filosofia" element={<Filosofia/>}/>
                    <Route path='comite-y-voluntariados' element= {<ComiteVolun/>}/>                  <Route path="*" element={<NotFound/>}/>
                </Routes>
            </BrowserRouter>
            <Formulario/>
            <GlobalNavBar position='bottom' />
            <Footer/>
        </>
     );
}

export default App;