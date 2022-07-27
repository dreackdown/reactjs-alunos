import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Alunos } from './components/Alunos/Alunos'
import { NovoAluno } from './components/NovoAluno/NovoAluno'
import { Login } from './components/Login/Login'

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/alunos" component={Alunos} />
        <Route path="/aluno/novo/:alunoId" component={NovoAluno} />
      </Switch>
    </BrowserRouter>
  )
}
