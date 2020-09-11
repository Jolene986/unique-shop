import React from 'react'
import './checkout-item.styles.scss'
//REDUX
import {connect} from 'react-redux'
import {removeItemFromCart} from '../../redux/cart/cart-actions'
import { addToCart } from '../../redux/cart/cart-actions'
import { decereaseItemQuantity } from '../../redux/cart/cart-actions'
const CheckoutItem = ({item, removeFromCart,decreaseQuantity,addToCart}) => {
  const {name,images,price,quantity}= item;
  return (
    <div className='checkout-item'>
        <div className='image-container'>
          <img src={images[0]} alt='cart item'/>
        </div>
  <span className='name'>{name}</span>
  <span className='quantity'>
    <span className='arrow' onClick={()=>decreaseQuantity(item)}>&#10092;</span>
    <span className='quantity-value'>{quantity}</span>
    <span className='arrow' onClick={()=>addToCart(item)}>&#10093;</span>
    </span>
  <span className='price'>{price}</span>
      <div className='remove-button' onClick={()=>removeFromCart(item)}>
        &#10007;
      </div>
    </div>
  )
}
const matchDispatchToProps = dispatch=> ({
  removeFromCart: item=> dispatch(removeItemFromCart(item)),
  addToCart: item => dispatch(addToCart(item)),
  decreaseQuantity: item => dispatch(decereaseItemQuantity(item))
})
export default connect(null, matchDispatchToProps)(CheckoutItem)
