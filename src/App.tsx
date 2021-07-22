import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Landing from './pages/landing'
import Dinitro from './pages/dinitro'

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Switch>
          <Route exact path="/" component={Landing}></Route>
          <Route path="/dinitro" component={Dinitro}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
