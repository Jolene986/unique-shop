import React from 'react'
import {Route} from 'react-router-dom'
import CollectionsOverview from '../../components/collections-overview/collections-overview'
import CollectionPage from '../collectionpage/collectionPage'
import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils'
//REDUX
import {setCollections} from '../../redux/shop/shop-actions'
import {connect} from 'react-redux'


class Shop extends React.Component {
  unsubscribeFromSnapshot = null;
  componentDidMount(){
    const {setCollections} = this.props;
     const collectionRef = firestore.collection('collections')
     collectionRef.onSnapshot(async snapshot => {
     const collectionsMap= convertCollectionsSnapshotToMap(snapshot)

     setCollections(collectionsMap)
     })
  }
  render(){
    const {match} = this.props;
    return (
      <div className='shop-page'>
     <Route exact path={`${match.path}`} component={ CollectionsOverview}/>
     <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
    </div>
    )
  }
}

   const mapDispatchToProps = dispatch => ({
     setCollections: collectionsMap => dispatch(setCollections(collectionsMap))
   })

export default connect(null, mapDispatchToProps)(Shop)