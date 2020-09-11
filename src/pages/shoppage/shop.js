import React from 'react'

import CollectionPreview from '../../components/collection-preview/collection-preview'
//REDUX
import {connect} from 'react-redux'
import {selectCollections} from '../../redux/shop/shop.selectors'

const Shop=({collections})=>(
    <div className='shop-page'>
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  )

    
   const mapStateToProps =state=> ({
    collections : selectCollections(state)
   }
)
export default connect(mapStateToProps)(Shop)