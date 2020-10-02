import React from "react";
import "./collectionPage.styles.scss";
import CollectionItem from "../../components/collection-item/collection-item";
import LazyLoad from "react-lazyload";
import Placeholder from "../../components/lazy-load-placeholder/placeholder";
//REDUX
import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selectors';
const CollectionPage = ({collection}) => {
  
  const { title, items } = collection;
  
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <LazyLoad
            once
            key={item.id}
            height={400}
            offset={[-50, 0]}
            placeholder={<Placeholder />}
             debounce={500}
          >
            <CollectionItem item={item} />
          </LazyLoad>
        ))}
      </div>
    </div>
  );
};
const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});


export default connect(mapStateToProps)(CollectionPage);
