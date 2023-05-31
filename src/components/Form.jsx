

const Form = ({ setInputText, todos, setTodos, inputText, setStatus }) => {

    return(
        <form>
        <div className="mb-3">
            <label htmlFor="name" className="form-label">Nombre</label>
            <input type="text" className="form-control" id="name" />
        </div>
        <div className="mb-3">
            <label htmlFor="email" className="form-label">Correo Electrónico</label>
            <input type="email" className="form-control" id="email" />
        </div>
        <div className="mb-3">
            <label htmlFor="message" className="form-label">Mensaje</label>
            <textarea className="form-control" id="message" rows="3"></textarea>
        </div>
        <button type="submit" className="btn btn-dark">Enviar</button>
    </form>

    )
}

export default Form;    