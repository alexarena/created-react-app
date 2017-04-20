import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.css'
import './sass/style.css'
import 'animate.css/animate.min.css'

import Page1 from './Views/Page1'

class NotFound extends Component {
  render() {
    return (
      <div>
        <h2><strong>404!</strong> That page does not exist.</h2>
        <a href="/">Return Home?</a>
      </div>
    )
  }
}

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Page1}/>
      <Route exact path="/pages/:anything" component={Page1}/>
      <Route path="*" component={NotFound} />
    </Switch>
  </Router>
)

ReactDOM.render(
  <Routes />,
  document.getElementById('root')
)
