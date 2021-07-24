import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/home"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
   return (
        <div className="App">
            <Router>
                    <Switch>
                        <Route path={"/"} exact component={()=> <Home/>}/>
                    </Switch>
            </Router>
        </div>
    );
}

export default App;
