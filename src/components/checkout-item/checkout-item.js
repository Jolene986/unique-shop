import React from 'react'
import './checkout-item.styles.scss'
import Quantity from '../quantity/quantity'
//REDUX
import {connect} from 'react-redux'
import {removeItemFromCart} from '../../redux/cart/cart-actions'

const CheckoutItem = ({item, removeFromCart}) => {
  const {name,images,price,quantity}= item;
  return (
    <div className='checkout-item'>
        <div className='image-container'>
          <img src={images[0]} alt='cart item'/>
        </div>
  <span className='name'>{name}</span>
  <Quantity item={item} quantity={quantity}/>
  <span className='price'>{price}</span>
      <div className='remove-button' onClick={()=>removeFromCart(item)}>
        &#10007;
      </div>
    </div>
  )
}
const matchDispatchToProps = dispatch=> ({
  removeFromCart: item=> dispatch(removeItemFromCart(item)),
  
})
export default connect(null, matchDispatchToProps)(CheckoutItem)
