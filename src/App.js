import React from 'react';
import { Route, Router, Switch } from "react-router-dom";
import history from "./browserHistory"
import Test from "./Container/Test/Test";

function App() {
  return (
    
      <Router history={history}>
        <div className="App">
          <Switch>
            <Route path="/" component={Test} />
          </Switch>        
        </div>
      </Router>
    
  );
}

export default App;
