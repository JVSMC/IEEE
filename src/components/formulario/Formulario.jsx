import '../formulario/Formulario.css';

function Formulario() {
    return (
        <div className='formContainer' id='ContactUs'>
            <div className='textComp'>
                <h2>¿Interesado en unirte a IEEE Sección Guadalajara?</h2>
                <p>¡Completa nuestro formulario y únete a nuestra comunidad de innovadores y apasionados por la tecnología!</p>
            </div>
            <form action="" className='form'>
                <div className='inputUser'>
                    <input type="text" name='user_name' placeholder='* Nombre' required/>
                    <input type="tel" name="user_phone" placeholder="No. Tel: +52 33 555 5555" />
                </div>
                <input type="text" name="user_subject" placeholder="* Asunto" required/>
                <input type="email" name='user_email' placeholder='* Correo electrónico' required />
                <textarea name="message"  placeholder="* Hola! dime cómo te podemos ayudar..." rows="4" required></textarea>
                <button type="submit">Send</button>
            </form>
        </div>
    );
}

export default Formulario;

