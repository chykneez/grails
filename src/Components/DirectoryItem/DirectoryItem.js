import React from 'react';

import './DirectoryItem.scss';

const DirectoryItem = ({ title, imageUrl }) => (
  <div
    className='directory-item'
    style={{ backgroundImage: `url(${imageUrl})` }}
  >
    <div className='content'>
      <h1 className='title'>{title}</h1>
      <span className='subtitle'>SHOP NOW</span>
    </div>
  </div>
);

export default DirectoryItem;
