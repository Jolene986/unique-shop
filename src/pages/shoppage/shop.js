import React from 'react'
import LazyLoad from 'react-lazyload';
import CollectionPreview from '../../components/collection-preview/collection-preview'
//REDUX
import {connect} from 'react-redux'
import {selectCollections} from '../../redux/shop/shop.selectors'

const Shop=({collections})=>(
    <div className='shop-page'>
      {collections.map(({ id, ...otherCollectionProps }) => (
         <LazyLoad key={id} height={200} offset={-50} >
           <CollectionPreview  {...otherCollectionProps} />
         </LazyLoad>
        
      ))}
    </div>
  )

    
   const mapStateToProps =state=> ({
    collections : selectCollections(state)
   }
)
export default connect(mapStateToProps)(Shop)