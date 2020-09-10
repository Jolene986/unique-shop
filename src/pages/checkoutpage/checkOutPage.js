import React from "react";
import "./checkOutPage.styles.scss";
//REDUX
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect'
import {selectCartItems} from '../../redux/cart/cart.selectors'  
import {selectCartTotal} from '../../redux/cart/cart.selectors'
import CheckoutItem from "../../components/checkout-item/checkout-item";

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
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total : selectCartTotal
})
export default connect(mapStateToProps)(CheckOutPage);
