import React, { lazy, Suspense, useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Loader from '../../Components/Loader/Loader';

import { fetchCollectionsStart } from '../../redux/shop/shopActions';

const CollectionPageContainer = lazy(() =>
  import('../CollectionPage/CollectionPageContainer')
);

const CollectionOverviewContainer = lazy(() =>
  import('../../Components/CollectionOverview/CollectionOverviewContainer')
);

const ShopPage = ({ fetchCollectionsStart, match }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <div>
      <Suspense fallback={<Loader />}>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </Suspense>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchToProps)(ShopPage);
