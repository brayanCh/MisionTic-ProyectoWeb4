
const TableContainer = props => {

    return (
        <form className="tabla-container" onSubmit={props.method} >
            <h2>{props.title}</h2>
            {props.children}
        </form>
    )
}

export default TableContainer;
