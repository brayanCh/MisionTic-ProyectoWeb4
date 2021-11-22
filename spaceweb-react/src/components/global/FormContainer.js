
const FormContainer = props => {

    return (
        <form className="form-container" onSubmit={props.method} >
            <h2>{props.title}</h2>
            {props.children}
        </form>
    )
}

export default FormContainer;
