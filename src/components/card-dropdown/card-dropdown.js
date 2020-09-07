import React from 'react'
import './card-dropdown.scss';
import CustomButton from '../custom-button/custom-button'

const CartDropdown = () => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>

      </div>
      <CustomButton>Go to checkout</CustomButton>
    </div>
  )
}

export default CartDropdown
