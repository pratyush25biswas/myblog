import Navbar from './Navbar';
import Home from './Home';

import Signups from './Signups';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import Logins from './Logins';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/home">
              < Home />
              
            </Route>
            <Route path="/signup">
              <Signups />
            </Route>
            <Route path="/login">
              <Logins />
            </Route>
            
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;