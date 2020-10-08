import React from 'react'
//REDUX
import {connect} from 'react-redux'
import { addToCart } from '../../redux/cart/cart-actions'
import { decereaseItemQuantity } from '../../redux/cart/cart-actions'

const Quantity = ({item,decreaseQuantity, addToCart, quantity}) => {
  return (
    <span className='quantity'>
    <span className='arrow' onClick={()=>decreaseQuantity(item)}>&#10092;</span>
    <span className='quantity-value'>{quantity}</span>
    <span className='arrow' onClick={()=>addToCart(item)}>&#10093;</span>
    </span> 
  )
}

const matchDispatchToProps = dispatch=> ({
  addToCart: item => dispatch(addToCart(item)),
  decreaseQuantity: item => dispatch(decereaseItemQuantity(item))
})
export default connect(null, matchDispatchToProps)(Quantity)

