import React from 'react';
import { Route } from 'react-router-dom';

import CollectionOverview from '../../Components/CollectionOverview/CollectionOverview';
import CollectionPage from '../CollectionPage/CollectionPage';

const ShopPage = ({ match }) => (
  <div>
    <Route exact path={`${match.path}`} component={CollectionOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
);

export default ShopPage;
