import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './Directory.scss';

import DirectoryItem from '../DirectoryItem/DirectoryItem';

import { selectDirectorySections } from '../../redux/directory/directorySelectors';

const Directory = ({ sections }) => (
  <div className='directory'>
    {sections.map(({ id, ...sectionProps }) => (
      <DirectoryItem key={id} {...sectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
