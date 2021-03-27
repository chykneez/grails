import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionOverview from '../../Components/CollectionOverview/CollectionOverview';
import CollectionPage from '../CollectionPage/CollectionPage';
import WithLoader from '../../Components/WithLoader/WithLoader';

import {
  firestore,
  convertCollectionsSnapshotToMap
} from '../../firebase/utils';

import { updateCollections } from '../../redux/shop/shopActions';

const CollectionOverviewWithLoader = WithLoader(CollectionOverview);
const CollectionPageWithLoader = WithLoader(CollectionPage);

class ShopPage extends React.Component {
  state = { loading: true };
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection('collections');

    collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      this.setState({ loading: false });
    });
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;

    return (
      <div>
        <Route
          exact
          path={`${match.path}`}
          render={props => (
            <CollectionOverviewWithLoader isLoading={loading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={props => (
            <CollectionPageWithLoader isLoading={loading} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap =>
    dispatch(updateCollections(collectionsMap))
});

export default connect(null, mapDispatchToProps)(ShopPage);
