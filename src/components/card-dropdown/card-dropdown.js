import React from 'react'
import './card-dropdown.scss';
import CustomButton from '../custom-button/custom-button'
import CartItem from '../cart-item/cart-item';

import {withRouter} from 'react-router-dom'

//REDUX
import {connect} from 'react-redux'
import {selectCartItems} from '../../redux/cart/cart.selectors'
import {toggleCartHidden} from '../../redux/cart/cart-actions'

const CartDropdown = ({ cartItems, history, dispatch }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <span className="empty-cart">Your cart is empty.</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCartHidden());
        }}
      >
        Go to checkout
      </CustomButton>
    </div>
  );
};

const mapStateToProps = (state) => (
  {cartItems : selectCartItems(state)}
)
export default withRouter(connect(mapStateToProps)(CartDropdown))








