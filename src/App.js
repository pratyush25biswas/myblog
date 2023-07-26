import Navbar from './Navbar';
import Home from './Home';
import Signup from './Signup';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';

import Login from './Login';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Create />
              <Home />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;