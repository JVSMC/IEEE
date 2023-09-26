import { Link } from "react-router-dom";
function Index() {
    return ( 
        <>
        <h1>Home</h1>
        <section id='Aqui'>
            <Link to="/about">About</Link>
        </section>
        </>
        
     );
}

export default Index;