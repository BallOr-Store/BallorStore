import 'styles/estilos.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Index from 'pages';
import EntradaPages from 'pages/Restaurantes';
import Layout from 'layouts/Layout';
import Viajes from 'pages/Viajes';

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Switch>
              <Route path='/Restaurantes'>
                  <EntradaPages/>
              </Route>
              <Route path='/Viajes'>
                  <Viajes/>
              </Route>
              <Route path='/'>
                  <Index/>
              </Route>
          </Switch>
        </Layout>
       </Router>
    </div>
  );
}


export default App;
