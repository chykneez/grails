import React from 'react';

import shopData from './shopData';

import CollectionPreview from '../../Components/CollectionPreview/CollectionPreview';

class ShopPage extends React.Component {
  constructor() {
    super();

    this.state = {
      collections: shopData
    };
  }

  render() {
    const { collections } = this.state;

    return (
      <div>
        {collections.map(({ id, ...collectionProps }) => (
          <CollectionPreview key={id} {...collectionProps} />
        ))}
      </div>
    );
  }
}

export default ShopPage;
