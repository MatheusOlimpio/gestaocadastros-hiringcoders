import React, { useEffect, useState } from "react";
import FormClientes from "../../components/FormClientes";
import * as Styled from './style';
export default function Clientes() {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    let listaClientes = JSON.parse(localStorage.getItem('clientes'));
    if (listaClientes) {
      setClientes(listaClientes);
    }
  }, [clientes])

  return (
    <>
      <h1>Clientes</h1>
      <FormClientes></FormClientes>
      <Styled.Subtitle>Listagem de Clientes</Styled.Subtitle>
      <Styled.Table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Sobrenome</th>
            <th>Endereco</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map((cliente, index) => {
            return (
              <tr key={index}>
                <td>{cliente.name}</td>
                <td>{cliente.lastname}</td>
                <td>{cliente.Endereco}</td>
              </tr>
            )
          })}
        </tbody>
      </Styled.Table>
    </>
  )
}