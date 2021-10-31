import React from "react";
import AppProvider from './platform/AppProvider';
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
          <AppProvider>
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
          </AppProvider>
      </Router>
  );
}

export default App;
