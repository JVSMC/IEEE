import HeroHeader from "../../components/heroHeader/HeroHeader";


function RamEstudiantil() {
    const topic = 'Ramas Estudiantiles';
    const infoText = 'Forma parte de la comunidad estudiantil de la IEEE. Con Ramas Estudiantiles, explora tu pasión por la tecnología, participa en eventos y amplía tu red.';
    const stButton = false;
    const pathImage = 'src/components/heroHeader/matthew-osborn-wMRIcT86SWU-unsplash.webp';
    return ( 
        <>
            <HeroHeader textH2={topic} textP={infoText} stButton={stButton} imageH={pathImage} />
           
        </>
     );
}

export default RamEstudiantil;