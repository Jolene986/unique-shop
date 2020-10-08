import React,{useRef, useEffect } from "react";
import "./quick-view-modal.styles.scss";
import Quantity from '../quantity/quantity'
import CustomButton from "../custom-button/custom-button";
import ModalImages from "../modal-images/modal-images";
//REDUX
import { connect } from "react-redux";
import { addToCart } from '../../redux/cart/cart-actions'



const QuickViewModal = ({ item, isInCart,closeModal ,addToCart}) => {
  
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
              <Quantity item={item} quantity={isInCart.quantity}/>
            )}
          </div>
        </div>
        <span className='close-modal' onClick={()=>closeModal()}>&#10007;</span>
      </div>
      
    </div>
  );
};


const matchDispatchToProps = (dispatch) => ({
  addToCart: (item) => dispatch(addToCart(item))
});

export default connect(null, matchDispatchToProps)(QuickViewModal);
