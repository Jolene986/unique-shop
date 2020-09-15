import React,{useRef, useEffect } from "react";
import "./quick-view-modal.styles.scss";
import CustomButton from "../custom-button/custom-button";
//REDUX
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { addToCart } from "../../redux/cart/cart-actions";
import { decereaseItemQuantity } from "../../redux/cart/cart-actions";
import ModalImages from "../modal-images/modal-images";

const QuickViewModal = ({ item, cartItems, addToCart, decreaseQuantity,closeModal }) => {
  let isInCart = cartItems.find((cartItem) => cartItem.id === item.id);
  const modalRef = useRef(null);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  });
  const handleClickOutside = e => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      closeModal();
    }
  };
  return (
    <div className="modal" >
      <div className="quck-view-modal" ref={modalRef}>
        <ModalImages images={item.images} />
        <div className="product-details">
          <h3>{item.name}</h3>
          <h4>{item.price} &euro;</h4>
          <p>{item.description}</p>
          <div className="quick-view-actions">
            {!isInCart ? (
              <CustomButton inverted onClick={() => addToCart(item)}>
                ADD TO CART
              </CustomButton>
            ) : (
              <span className="quantity">
                <span className="arrow" onClick={() => decreaseQuantity(item)}>
                  &#10092;
                </span>
                <span className="quantity-value">{isInCart.quantity}</span>
                <span className="arrow" onClick={() => addToCart(item)}>
                  &#10093;
                </span>
              </span>
            )}
          </div>
        </div>
        <span className='close-modal' onClick={()=>closeModal()}>&#10007;</span>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({ cartItems: selectCartItems(state) });

const matchDispatchToProps = (dispatch) => ({
  addToCart: (item) => dispatch(addToCart(item)),
  decreaseQuantity: (item) => dispatch(decereaseItemQuantity(item)),
});

export default connect(mapStateToProps, matchDispatchToProps)(QuickViewModal);
