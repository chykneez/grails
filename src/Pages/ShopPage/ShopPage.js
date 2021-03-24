import React from 'react';

import shopData from './shopData';

class ShopPage extends React.Component {
  constructor() {
    super();

    this.state = {
      collections: shopData
    };
  }

  render() {
    return <div>SHOP PAGE</div>;
  }
}

export default ShopPage;
