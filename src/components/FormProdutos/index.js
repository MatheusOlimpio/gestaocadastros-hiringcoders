import React from "react"
import { useForm } from "react-hook-form"
import * as Styled from './style';

export default function FormProdutos() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const onSubmit = data => {
    data = Object.assign(data, { img: '/assets/img/products/apple-watch-series-5' });
    let produtos = JSON.parse(localStorage.getItem('products')) || [];
    produtos.push(data);
    localStorage.setItem('products', JSON.stringify(produtos));
    alert('Produto cadastrado com sucesso!')
    reset()
  };
  return (
    <>
      <Styled.Title>Formulário de cadastro</Styled.Title>
      <Styled.Form onSubmit={handleSubmit(onSubmit)}>
        <Styled.Input placeholder="Nome"  {...register("name", { required: true, maxLength: 20 })} />
        {errors.name && <span>Este campo é obrigatório</span>}
        <Styled.Input placeholder="Preço" type="number" {...register("price", { required: true, maxLength: 10 })} />
        {errors.price && <span>Este campo é obrigatório</span>}
        <Styled.Button type="submit">CADASTRAR</Styled.Button>
      </Styled.Form>
    </>
  )
}