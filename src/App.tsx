import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Landing from './pages/landing'
function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Switch>
          <Route path="/" component={Landing}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
