import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import WithLoader from '../../Components/WithLoader/WithLoader';
import CollectionPage from './CollectionPage';

import { selectShopIsLoaded } from '../../redux/shop/shopSelectors';

const mapStateToProps = createStructuredSelector({
  isLoading: state => !selectShopIsLoaded(state)
});

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithLoader
)(CollectionPage);

export default CollectionPageContainer;
