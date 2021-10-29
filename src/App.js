import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Container from "./components/generic/Container/Container";
import DocumentationView from "./views/DocumentationView";
import TimersView from "./views/TimersView";


const App = () => {
  return (
      <Router>
        <nav className="navigation">
            <ul>
              <li key={1}>
                <Link to="/">Timers</Link>
              </li>
              <li key={2}>
                <Link to="/docs">Documentation</Link>
              </li>
            </ul>
          </nav>
          <br />
        <Container>
          <Switch>
              <Route path="/docs">
                <DocumentationView />
              </Route>
              <Route path="/">
                <TimersView />
              </Route>
            </Switch>
        </Container>
      </Router>
  );
}

export default App;
