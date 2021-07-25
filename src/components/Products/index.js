import React, { useState } from "react";
import ProductItem from "../ProductItem";

import * as Style from './style';

export default function Products() {
  const [products] = useState([
    {
      id: '1',
      name: 'IPHONE XS L',
      price: 3000,
      img: '/assets/img/products/iphone11-green-select.png'
    },
    {
      id: '2',
      name: 'IPHONE XS L',
      price: 3000,
      img: '/assets/img/products/iphone11-red-select.png'
    },
    {
      id: '3',
      name: 'IPHONE PRO MAX GOLD',
      price: 8000,
      img: '/assets/img/products/iphone-12-pro-max-gold-hero.png'
    },
    {
      id: '4',
      name: 'APPLE WATCH SERIES 5',
      price: 4000,
      img: '/assets/img/products/apple-watch-series-5.png'
    },
    {
      id: '5',
      name: 'MACBOOK AIR',
      price: 15000,
      img: '/assets/img/products/macbook-air.png'
    },
    {
      id: '6',
      name: 'SMARTPHONE SAMSUNG GALAXY A31',
      price: 1000,
      img: '/assets/img/products/smartphone-samsung-galaxy-a31-6-4-128gb.jpg'
    },
    {
      id: '7',
      name: 'XIAOMI 11',
      price: 3500,
      img: '/assets/img/products/mi-11-3.png'
    },
    {
      id: '8',
      name: 'HUAWEI P30 LITE',
      price: 4000,
      img: '/assets/img/products/HUAWEI-P30-LITE-128GB-4G-Preto.png'
    }
  ]);
  localStorage.setItem('products', JSON.stringify(products));
  return (
    <>
      <Style.Title>Produtos</Style.Title>
      <Style.Products>
        {products.map((product, index) => {
          return <ProductItem key={product.id} item={product}></ProductItem>
        })}

      </Style.Products>
    </>
  );
}