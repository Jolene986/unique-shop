
import React from 'react';

import './collection-item.styles.scss';
import CustomButton from '../custom-button/custom-button'
//REDUX
import { connect } from 'react-redux'
import { addToCart } from '../../redux/cart/cart-actions'

const CollectionItem = ({ item, addToCart }) => {

  const { name, price, imageUrl } = item

  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}&#8364;</span>
      </div>
      <CustomButton inverted onClick={()=>addToCart(item)}>ADD TO CART</CustomButton>
    </div>
  );
}


const mapDispatchToProps = dispatch => ({
  addToCart: (item) => dispatch(addToCart(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);