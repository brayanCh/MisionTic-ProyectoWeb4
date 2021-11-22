import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/bar";

// pages 

import CrearUsuarios from "./components/pages/CrearUsuario"

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>

                <Route exact path="/usuarios/mostrar" />

                <Route exact path="/usuarios/crearnuevo" element={<CrearUsuarios />} />

            </Routes>
        </Router>
    );
}

export default App;
