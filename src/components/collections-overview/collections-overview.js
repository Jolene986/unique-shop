import React from 'react'
import './collections-overview.styles.scss'
import LazyLoad from 'react-lazyload';
import CollectionPreview from '../../components/collection-preview/collection-preview'
//REDUX
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect'
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';

 const CollectionsOverview =({collections})=> (
   
      <div className='collections-overview'>
        {collections.map(({ id, ...otherCollectionProps }) => (
         <LazyLoad key={id} height={200} offset={-50} >
           <CollectionPreview  {...otherCollectionProps} />
         </LazyLoad>
        
      ))}
     
      </div>
    )


    const mapStateToProps = createStructuredSelector({
      collections: selectCollectionsForPreview
    });
    
    export default connect(mapStateToProps)(CollectionsOverview);
    