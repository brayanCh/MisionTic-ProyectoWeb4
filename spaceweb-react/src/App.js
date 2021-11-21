import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/bar";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route exact path="/usuarios/mostrar">
                
                </Route>
                <Route exact path="/usuarios/crearnuevo">
                
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
