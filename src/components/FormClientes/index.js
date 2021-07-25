import React from "react"
import { useForm } from "react-hook-form"
import * as Styled from './style';

export default function FormClientes() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const onSubmit = data => {
    let clientes = JSON.parse(localStorage.getItem('clientes')) || [];
    clientes.push(data);
    localStorage.setItem('clientes', JSON.stringify(clientes));
    alert('Cliente cadastrado com sucesso!')
    reset()
  };
  return (
    <>
      <Styled.Title>Formulário de cadastro</Styled.Title>
      <Styled.Form onSubmit={handleSubmit(onSubmit)}>
        <Styled.Input placeholder="Nome"  {...register("name", { required: true, maxLength: 20 })} />
        {errors.name && <span>Este campo é obrigatório</span>}
        <Styled.Input placeholder="Sobrenome"  {...register("lastname", { required: true, maxLength: 20 })} />
        {errors.name && <span>Este campo é obrigatório</span>}
        <Styled.Input placeholder="Endereco"  {...register("Endereco", { required: true, maxLength: 40 })} />
        {errors.name && <span>Este campo é obrigatório</span>}
        <Styled.Button type="submit">CADASTRAR</Styled.Button>
      </Styled.Form>
    </>
  )
}