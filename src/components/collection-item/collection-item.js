
import React,{useState} from 'react';
import {Link} from 'react-router-dom'

import './collection-item.styles.scss';
import CustomButton from '../custom-button/custom-button'
import QuickViewModal from '../quick-view-modal/quick-view-modal';
import {ReactComponent as QuickView} from '../../assets/zoom.svg'
//REDUX
import { connect } from 'react-redux'
import { addToCart } from '../../redux/cart/cart-actions'
import { selectCartItems } from "../../redux/cart/cart.selectors";


const CollectionItem = ({ item, addToCart, cartItems }) => {
const [showModal, setShowModal]= useState(false)
  const { name, price, images } = item
  const handleClose = ()=> {
    setShowModal(false)
  }
  let isInCart = cartItems.find((cartItem) => cartItem.id === item.id);
  return (
    <>
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${images[0]})`,
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}&#8364;</span>
      </div>
     { !isInCart? (<CustomButton inverted onClick={()=>addToCart(item)}>ADD TO CART</CustomButton>) :
     (<Link to={'/checkout'} className='inverted custom-button'>CHECKOUT</Link>)}
      <QuickView className='quick-view' onClick={()=>setShowModal(true)}/>
    </div>
   {showModal? <QuickViewModal item={item} closeModal={handleClose} isInCart={isInCart}/> :null }
    </>
  );
}

const mapStateToProps = (state) => ({ cartItems: selectCartItems(state) });
const mapDispatchToProps = dispatch => ({
  addToCart: (item) => dispatch(addToCart(item))
})
CollectionItem.whyDidYouRender = true
export default connect(mapStateToProps, mapDispatchToProps)(CollectionItem);