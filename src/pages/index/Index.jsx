import HeroHeader from "../../components/heroHeader/HeroHeader";





function Index() {

    const topic = 'Eleva tu carrera profesional al siguiente nivel';
    const infoText = 'Mediante la promoción y aplicación de la ciencia y tecnología, nuestro enfoque en el beneficio comunitario te brindará oportunidades únicas para crecer.';
    const stButton = true;
    const pathImage = 'src/components/heroHeader/matthew-osborn-wMRIcT86SWU-unsplash.webp';

    return (
        <>
            <HeroHeader textH2={topic} textP={infoText} stButton={stButton} imageH={pathImage} />
        </>
    );
}

export default Index;