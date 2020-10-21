import React from 'react'
import {Route} from 'react-router-dom'
import CollectionsOverview from '../../components/collections-overview/collections-overview'
import CollectionPage from '../collectionpage/collectionPage'
import WithSpinner from '../../components/with-spinner/with-spinner'
import {firestore, convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils'
//REDUX
import {setCollections} from '../../redux/shop/shop-actions'
import {connect} from 'react-redux'


const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

class Shop extends React.Component {
  state = {
    loading: true
  }
  unsubscribeFromSnapshot = null;
  componentDidMount(){
    const {setCollections} = this.props;
     const collectionRef = firestore.collection('collections')
     collectionRef.onSnapshot(async snapshot => {
     const collectionsMap= convertCollectionsSnapshotToMap(snapshot)

     setCollections(collectionsMap)
     this.setState({ loading: false });
     })
  }
  render(){
    const {match} = this.props;
    return (
      <div className='shop-page'>
     <Route exact path={`${match.path}`} render={props => (
            <CollectionsOverviewWithSpinner isLoading={this.state.loading} {...props} />
          )}/>
     <Route path={`${match.path}/:collectionId`} render={props => (
            <CollectionPageWithSpinner isLoading={this.state.loading} {...props} />
          )}/>
    </div>
    )
  }
}

   const mapDispatchToProps = dispatch => ({
     setCollections: collectionsMap => dispatch(setCollections(collectionsMap))
   })

export default connect(null, mapDispatchToProps)(Shop)