import React from 'react';

import './cart-item.style.scss';

const CartItem = ({ item: { images, price, name, quantity } }) => (
  <div className='cart-item'>
    <img src={images[0]} alt='item' />
    <div className='item-details'>
      <span className='name'>{name}</span>
      <span className='price'>
        {quantity} x {price} {' '}&#8364;
      </span>
    </div>
  </div>
);

export default CartItem;

