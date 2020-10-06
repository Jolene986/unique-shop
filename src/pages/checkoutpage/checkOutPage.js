import React from "react";
import "./checkOutPage.styles.scss";
import CheckoutItem from "../../components/checkout-item/checkout-item";
import StripeButton from '../../components/stripe-button/stripe-button'
//REDUX
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect'
import {selectCartItems} from '../../redux/cart/cart.selectors'  
import {selectCartTotal} from '../../redux/cart/cart.selectors'


const CheckOutPage = ({cartItems, total}) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        {["Product", "Description", "Quantity", "Price", "Remove"].map(
          (item, index) => (
            <div key={index} className="header-block">
              <span>{item}</span>
            </div>
          )
        )}
 </div>
 {cartItems.map(item => <CheckoutItem key={item.id} item={item}/>)}
 <div className= 'total'>
   <span>Total: {total} &#8364;</span>
   </div>
   <div className='test-warning'>
      *Please use the following test credit card for payments*
      <br />
      4242 4242 4242 4242 - Exp: 01/22 - CVV: 123
    </div>
    <StripeButton price={total} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total : selectCartTotal
})
export default connect(mapStateToProps)(CheckOutPage);
