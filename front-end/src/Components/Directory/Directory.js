import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { DirectoryContainer } from './DirectoryStyles';

import DirectoryItem from '../DirectoryItem/DirectoryItem';

import { selectDirectorySections } from '../../redux/directory/directorySelectors';

const Directory = ({ sections }) => (
  <DirectoryContainer>
    {sections.map(({ id, ...sectionProps }) => (
      <DirectoryItem key={id} {...sectionProps} />
    ))}
  </DirectoryContainer>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
