import React from "react"
import { Switch, Route } from "react-router-dom"

import Home from "./views/Home";
import Produtos from "./views/Produtos";
import Clientes from "./views/Clientes";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home}></Route>
      <Route path="/produtos" exact component={Produtos}></Route>
      <Route path="/clientes" exact component={Clientes}></Route>
    </Switch>
  )
}