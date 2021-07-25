import React from "react";
import { GlobalContext } from "../../store/GlobalContext";
import * as Style from './style';

export default function ProductItem({ item }) {
  const cart = React.useContext(GlobalContext);
  function addItemToCart(item) {
    let items = [];
    if (!window.localStorage.cart) {
      window.localStorage.cart = JSON.stringify([item]);
      cart.setDados((cart) => [item]);
      return;
    }

    items = Object.values(JSON.parse(window.localStorage.cart));
    items.push(item);
    window.localStorage.cart = JSON.stringify(items);
    cart.setDados((cart) => items);
  }

  return (
    <>
      <Style.ProductItem>
        <Style.ProductImage src={item.img} />
        <Style.ProductName>{item.name}</Style.ProductName>
        <Style.ProductPrice>R$ {item.price}</Style.ProductPrice>
        <Style.ProductBuy type="button" onClick={() => { addItemToCart(item) }}>Adicionar ao carrinho</Style.ProductBuy>
      </Style.ProductItem>
    </>
  );
}