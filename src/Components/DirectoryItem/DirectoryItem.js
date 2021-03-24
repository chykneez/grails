import React from 'react';

const DirectoryItem = ({ title }) => (
  <div className='directory-item'>
    <div className='content'>
      <h1 className='title'>{title}</h1>
      <span className='subtitle'>SHOP NOW</span>
    </div>
  </div>
);

export default DirectoryItem;
