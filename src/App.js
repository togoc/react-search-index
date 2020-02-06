import React, { Component } from 'react'
import { Route, HashRouter, Switch, Redirect } from 'react-router-dom'
import { observer } from 'mobx-react'
import { Home, Detail } from './pages'
import store from './store'
window.store = store
@observer class App extends Component {
  render() {
    return (
      <>
        {store.count}
        <HashRouter>
          <Switch>
            <Route render={() => {
              return <Home store={store} />
            }} path="/home" />
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

export default App