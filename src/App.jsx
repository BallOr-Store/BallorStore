import 'styles/estilos.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Index from 'pages';
import EntradaPages from 'pages/Entrada';

function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
              <Route path='/Entrada'>
                  <EntradaPages/>
              </Route>
              <Route path='/'>
                  <Index/>
              </Route>
          </Switch>
       </Router>
    </div>
  );
}


export default App;
