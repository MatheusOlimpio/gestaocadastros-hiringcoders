import React from "react";
import CartItem from "../CartItem";
import { GlobalContext } from "../../store/GlobalContext";
import * as Style from './style';

export default function Cart(props) {
  const cart = React.useContext(GlobalContext);

  return (
    <>

      {props.activeCart &&
        <Style.Cart>
          <Style.HeaderCart>
            <Style.Title>Carrinho</Style.Title>
          </Style.HeaderCart>
          {cart.dados &&
            cart.dados.map((item, index) => {
              return item ? <CartItem key={index} product={item} index={index}></CartItem> : ''
            })
          }
        </Style.Cart>
      }
    </>
  );
}