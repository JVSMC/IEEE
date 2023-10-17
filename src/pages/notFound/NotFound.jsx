import dataImg from '../../dataIEEE/notFound/notFoundImg.json';

/* The code defines a React functional component called `NotFound`. This component is responsible for
rendering a "404 Page Not Found" message along with an image and a description. */
function NotFound() {
    let { imgData } = dataImg;
    const max = imgData.length;
    let index = Math.floor(Math.random() * max);
    // console.log(imgData[index]);

    return (
        <div className='spaceBtwComp' style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            textAlign: 'center'
        }}>
            <h2 className='titleSection'>Página no encontrada 404</h2>
            <img style={{
                width: '90%', // Ancho al 100% del contenedor
                height: '35vh', // Altura automática para mantener la proporción
                margin: '2rem auto'
            }} src={imgData[index]} alt="Esta página no ha sido encontrada, es probable que el equipo de desarrollo esté trabajando en ello." />
            <p style={{
                padding: '0 1rem'
            }}>Esta página no ha sido encontrada, es probable que el equipo de desarrollo esté trabajando en ello.</p>
        </div>
    );
}

export default NotFound;