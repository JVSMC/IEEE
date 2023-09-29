import HeroHeader from "../../components/heroHeader/HeroHeader";

function CapTecnico() {
    const topic = 'Capitulos tecnicos';
    const infoText = 'Únete a los Capítulos Técnicos de la IEEE y sumérgete en la vanguardia de la tecnología. Conéctate con expertos, participa en eventos y avanza en tu campo preferido.';
    const stButton = false;
    const pathImage = 'src/components/heroHeader/matthew-osborn-wMRIcT86SWU-unsplash.webp';

    return (
        <>
            <HeroHeader textH2={topic} textP={infoText} stButton={stButton} imageH={pathImage} />
        </>
    );
}

export default CapTecnico;