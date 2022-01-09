import Home from './Home';
import Header from './Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ContactMe from './ContactMe';
import Resume from './Resume';

function App() {
  return (
    <div>
      <Router>
      <Header title="Subhajit Bhar"/>
      <Switch>
          <Route path="/contactMe">
            <ContactMe />
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
   
  );
}

export default App;
