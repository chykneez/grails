import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import WithLoader from '../WithLoader/WithLoader';
import CollectionOverview from './CollectionOverview';

import { selectShopIsFetching } from '../../redux/shop/shopSelectors';

const mapStateToProps = createStructuredSelector({
  isLoading: selectShopIsFetching
});

const CollectionOverviewContainer = compose(
  connect(mapStateToProps),
  WithLoader,
  CollectionOverview
);

export default CollectionOverviewContainer;
