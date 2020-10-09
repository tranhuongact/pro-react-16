import React from 'react';
import './App.css'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Display from './Display'
import Home from './Home'
import Comp from "./Component"

// const name = 'Huong'
// const city = 'Ha Noi'
export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      city: 'Ha Noi'
    }
  }

  // message = () => `Hello ${name} from ${city}`

  // render = () => (
  //   <div className="text-center">
  //     <h4 className="bg-primary text-white text-center p-3">
  //       {this.message()}
  //     </h4>
  //     <img src={reactLogo} alt='reactLog' />
  //     <link rel='stylesheet'
  //       href={process.env.PUBLIC_URL + '/static.css'} />
  //     <img src={process.env.PUBLIC_URL + '/logo.svg'} alt="reactLogo" />
  //   </div>
  // )

  changeCity = () => {
    debugger
    this.setState({
      city: this.state.city === 'Ha Noi' ? 'Vinh Phuc' : 'Ha Noi'
    })
  }

  render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light" >
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/display" className="nav-link">Chap 9</Link>
                </li>
                <li className="nav-item dropdown">
                  <Link to="/component" className="nav-link">Chap 10</Link>
                </li>
              </ul>
            </div>
          </nav>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/display">
              <Display value={this.state.city} callback={this.changeCity} />
            </Route>
            <Route path="/component">
              <Comp />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>

      </Router >
    )
  }
}
