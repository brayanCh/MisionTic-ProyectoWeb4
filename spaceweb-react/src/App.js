import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/usuarios/mostrar">
                
                </Route>
                <Route exact path="/usuarios/crearnuevo">
                
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
