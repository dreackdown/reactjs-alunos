import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Alunos } from './components/Alunos/Alunos'
import { Login } from './components/Login/Login'

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/alunos" component={Alunos} />
      </Switch>
    </BrowserRouter>
  )
}
