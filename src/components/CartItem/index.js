import React from "react";
import * as Style from './style';
export default function CartItem({ product, index }) {
  return (
    <>
      <Style.Items>
        <Style.Item>
          <Style.ItemImage src={product.img} />
          <Style.ItemDetails>
            <h1>{product.name}</h1>
            <p>R$ {product.price}</p>
          </Style.ItemDetails>
        </Style.Item>
      </Style.Items>
    </>
  );
}