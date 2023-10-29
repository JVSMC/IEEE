import '../usuarios/Users.css';

function Users() {
    return (
        <section className='spaceBtwComp2'>
            <h2>Dar de alta usuarios</h2>
            <form action="" className='formUsers'>
                <input type="text" id="user_name" placeholder="* Nombre" required />
                <input type="text" id="user_position" placeholder="* Puesto" required />
                <button type="submit" id="myButton">Guardar</button>
            </form>
        </section>

    );
}

export default Users;