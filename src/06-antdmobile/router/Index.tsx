import React from 'react'
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom'
import Film from '../views/Film'
import Cinema from '../views/Cinema'
import Center from '../views/Center'
import Detail from '../views/Detail'

export default function IndexRouter() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/film" component={Film} />
        <Route path="/cinema" component={Cinema} />
        <Route path="/center" component={Center} />
        <Route path="/detail/:id" component={Detail} />

        <Redirect from="/" to="/film"></Redirect>
      </Switch>
    </HashRouter>
  )
}
