import React, { Component } from 'react'
import { Route, HashRouter, Switch, Redirect } from 'react-router-dom'
import { Home, Detail } from './pages'
export default class App extends Component {
  render() {
    return (
      <>
        <HashRouter>
          <Switch>
            <Route component={Home} path="/home" />
            <Route component={Detail} path="/detail" />

            <Redirect
              from="/"
              to="/home"
            />
          </Switch>
        </HashRouter>
      </>
    )
  }
}
