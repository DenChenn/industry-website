import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Landing from './pages/landing'
import Dinitro from './pages/dinitro'
import Generator from './pages/generator'
import Advantage from './pages/advantage'

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Switch>
          <Route exact path="/" component={Landing}></Route>
          <Route path="/dinitro" component={Dinitro}></Route>
          <Route path="/generator" component={Generator}></Route>
          <Route path="/advantage" component={Advantage}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
