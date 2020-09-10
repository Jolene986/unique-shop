import React from 'react'
import './card-dropdown.scss';
import CustomButton from '../custom-button/custom-button'
import CartItem from '../cart-item/cart-item';

//REDUX
import {connect} from 'react-redux'
import {selectCartItems} from '../../redux/cart/cart.selectors'


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

const mapStateToProps = (state) => (
  {cartItems : selectCartItems(state)}
)
export default connect(mapStateToProps)(CartDropdown)








