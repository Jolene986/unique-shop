import React, { useState } from "react";

import QuickViewModal from "../quick-view-modal/quick-view-modal";


//STYLED
import {
  StyledCollectionItem,
  StyledAddToCartButton,
  StyledQuickView,
  BackgroundImage,
  StyledCollectionFooter,
  StyledPrice,
  StyledName,
  StyledLink,
} from "./colection-item.styles";
//REDUX
import { connect } from "react-redux";
import { addToCart } from "../../redux/cart/cart-actions";
import { selectCartItems } from "../../redux/cart/cart.selectors";

const CollectionItem = ({ item, addToCart, cartItems }) => {
  const [showModal, setShowModal] = useState(false);
  const { name, price, images } = item;
  const handleClose = () => {
    setShowModal(false);
  };
  let isInCart = cartItems.find((cartItem) => cartItem.id === item.id);
  return (
    <>
      <StyledCollectionItem>
        <BackgroundImage className="image" imageUrl={images[0]} />
        <StyledCollectionFooter>
          <StyledName>{name}</StyledName>
          <StyledPrice>{price}&#8364;</StyledPrice>
        </StyledCollectionFooter>
        {!isInCart ? (
          <StyledAddToCartButton inverted onClick={() => addToCart(item)}>
            ADD TO CART
          </StyledAddToCartButton>
        ) : (
          <StyledLink to={"/checkout"}>CHECKOUT</StyledLink>
        )}
        <StyledQuickView onClick={() => setShowModal(true)} />
      </StyledCollectionItem>
      {showModal ? (
        <QuickViewModal
          item={item}
          closeModal={handleClose}
          isInCart={isInCart}
        />
      ) : null}
    </>
  );
};

const mapStateToProps = (state) => ({ cartItems: selectCartItems(state) });
const mapDispatchToProps = (dispatch) => ({
  addToCart: (item) => dispatch(addToCart(item)),
});
CollectionItem.whyDidYouRender = true;
export default connect(mapStateToProps, mapDispatchToProps)(CollectionItem);
