import { Link} from "react-router-dom"


const Navbar = () => {

    return (

        <div className="navbar">
            <NavItem>
                <Link to="/usuarios/mostrar">
                    <p> Mostrar usuarios </p>
                </Link> 
            </NavItem>
            <NavItem>
                <Link to="/usuarios/crearnuevo">
                    <p> Crear un nuevo usuario </p>
                </Link> 
            </NavItem>
        </div>
    )
} 

export default Navbar;
