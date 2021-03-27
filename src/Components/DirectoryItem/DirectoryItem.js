import React from 'react';
import { withRouter } from 'react-router-dom';

import {
  DirectoryItemContainer,
  BackgroundImageContainer,
  ContentContainer,
  ContentTitle,
  ContentSubtitle
} from './DirectoryItemStyles';

const DirectoryItem = ({ title, imageUrl, size, history, match, linkUrl }) => (
  <DirectoryItemContainer
    size={size}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <BackgroundImageContainer
      className='background-image'
      imageUrl={imageUrl}
    />

    <ContentContainer>
      <ContentTitle>{title.toUpperCase()}</ContentTitle>
      <ContentSubtitle>SHOP NOW</ContentSubtitle>
    </ContentContainer>
  </DirectoryItemContainer>
);

export default withRouter(DirectoryItem);
