
import React,{useState} from 'react';

import './collection-item.styles.scss';
import CustomButton from '../custom-button/custom-button'
import {ReactComponent as QuickView} from '../../assets/zoom.svg'
//REDUX
import { connect } from 'react-redux'
import { addToCart } from '../../redux/cart/cart-actions'
import QuickViewModal from '../quick-view-modal/quick-view-modal';

const CollectionItem = ({ item, addToCart }) => {
const [showModal, setShowModal]= useState(false)
  const { name, price, images } = item
  const handleClose = ()=> {
    setShowModal(false)
  }
  return (
    <>
    {console.log('RENDER')}
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
      <CustomButton inverted onClick={()=>addToCart(item)}>ADD TO CART</CustomButton>
      <QuickView className='quick-view' onClick={()=>setShowModal(true)}/>
    </div>
   {showModal? <QuickViewModal item={item} closeModal={handleClose}/> :null }
    </>
  );
}


const mapDispatchToProps = dispatch => ({
  addToCart: (item) => dispatch(addToCart(item))
})
CollectionItem.whyDidYouRender = true
export default connect(null, mapDispatchToProps)(CollectionItem);