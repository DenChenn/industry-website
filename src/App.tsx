import React from "react";
import {Col, Row} from 'react-flexbox-grid'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Landing from "./pages/Landing"
function App() {
  return (
    <BrowserRouter>
      <Switch>
          <Route exact path="/" render={() => <Landing />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
