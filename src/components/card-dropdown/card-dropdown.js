import React from 'react'
import './card-dropdown.scss';
import CustomButton from '../custom-button/custom-button'

//REDUX
import {connect} from 'react-redux'
import CartItem from '../cart-item/cart-item';

const CartDropdown = ({cartItems}) => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
      {cartItems.map(item => <CartItem key={item.id} item={item}/>)}
      </div>
      <CustomButton>Go to checkout</CustomButton>
    </div>
  )
}

const mapStateToProps = ({cart: {cartItems}}) => (
  {cartItems}
)
export default connect(mapStateToProps)(CartDropdown)








