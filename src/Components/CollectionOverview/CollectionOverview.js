import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './CollectionOverview.scss';

import CollectionPreview from '../CollectionPreview/CollectionPreview';

import { selectShopCollectionsForPreview } from '../../redux/shop/shopSelectors';

const CollectionOverview = ({ collections }) => (
  <div className='collection-overview'>
    {collections.map(({ id, ...collectionProps }) => (
      <CollectionPreview key={id} {...collectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionOverview);
