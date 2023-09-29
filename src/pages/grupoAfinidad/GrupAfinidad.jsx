import HeroHeader from "../../components/heroHeader/HeroHeader";


function GrupAfinidad() {
    const topic = 'Grupos de Afinidad';
    const infoText = 'Descubre tu nicho en la IEEE a través de Grupos de Afinidad. Conéctate con profesionales que comparten tus intereses, desde mujeres en ingeniería hasta entusiastas de la robótica.';
    const stButton = false;
    const pathImage = 'src/components/heroHeader/matthew-osborn-wMRIcT86SWU-unsplash.webp';
    return ( 
        <>
            <HeroHeader textH2={topic} textP={infoText} stButton={stButton} imageH={pathImage} />
           
        </>
     );
}

export default GrupAfinidad;