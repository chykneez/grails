import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { CollectionOverviewContainer } from './CollectionOverviewStyles';

import CollectionPreview from '../CollectionPreview/CollectionPreview';

import { selectShopCollectionsForPreview } from '../../redux/shop/shopSelectors';

const CollectionOverview = ({ collections }) => (
  <CollectionOverviewContainer>
    {collections.map(({ id, ...collectionProps }) => (
      <CollectionPreview key={id} {...collectionProps} />
    ))}
  </CollectionOverviewContainer>
);

const mapStateToProps = createStructuredSelector({
  collections: selectShopCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionOverview);
