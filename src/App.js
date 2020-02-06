import React, { Component } from 'react'
import { Route, HashRouter, Switch, Redirect } from 'react-router-dom'
import { observer, Provider } from 'mobx-react'
import { Home, Detail } from './pages'
import store from './store'

@observer class App extends Component {
  render() {
    return (
      <Provider store={store}>
        < HashRouter >
          <Switch>
            <Route component={Home} path="/home" />
            <Route component={Detail} path="/detail" />
            <Redirect
              from="/"
              to="/home"
            />
          </Switch>
        </HashRouter >
      </Provider>
    )
  }
}

export default App