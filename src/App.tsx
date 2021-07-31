import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Landing from './pages/landing'
import Dinitro from './pages/dinitro'
import Generator from './pages/generator'
import Concept from './pages/concept'
import Advantage from './pages/advantage'
import { Fragment } from 'react'
import ScrollToTop from './scroll'
import Achievement from './pages/achievement'

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Fragment>
          <ScrollToTop></ScrollToTop>
          <Switch>
            <Route exact path="/" component={Landing}></Route>
            <Route path="/dinitro" component={Dinitro}></Route>
            <Route path="/generator" component={Generator}></Route>
            <Route path="/concept" component={Concept}></Route>
            <Route path="/advantage" component={Advantage}></Route>
            <Route path="/achievement" component={Achievement}></Route>
          </Switch>
        </Fragment>
      </div>
    </BrowserRouter>
  )
}

export default App
