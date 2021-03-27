import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionPageContainer from '../CollectionPage/CollectionPageContainer';
import CollectionOverviewContainer from '../../Components/CollectionOverview/CollectionOverviewContainer';

import { fetchCollectionsStartAsync } from '../../redux/shop/shopActions';

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }

  render() {
    const { match } = this.props;

    return (
      <div>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(null, mapDispatchToProps)(ShopPage);
