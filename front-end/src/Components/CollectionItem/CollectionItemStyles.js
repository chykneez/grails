import styled, { css } from 'styled-components';

import CustomButton from '../CustomButton/CustomButton';

const nameAndPrice = css`
  background-color: #fafafa;
  padding: 5px 10px;
`;

export const CollectionItemContainer = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 300px;
  align-items: center;
  border: #fafafa 2px solid;
  border-radius: 3px;
  position: relative;

  &:hover {
    .image {
      opacity: 0.8;
    }

    button {
      opacity: 0.85;
      display: flex;
    }
  }

  @media screen and (max-width: 800px) {
    width: 40vw;
    margin-bottom: 20px;

    &:hover {
      .image {
        opacity: unset;
      }

      button {
        opacity: unset;
      }
    }
  }
`;

export const AddButton = styled(CustomButton)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 175px;
  display: none;

  @media screen and (max-width: 800px) {
    display: block;
    opacity: 0.9;
    min-width: unset;
    padding: 0 10px;
    top: 160px;
  }
`;

export const BackgroundImage = styled.div`
  width: 80%;
  height: 95%;
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  margin-bottom: 50px;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const CollectionFooterContainer = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 18px;
  margin-bottom: 15px;
`;

export const NameContainer = styled.div`
  ${nameAndPrice}
`;

export const PriceContainer = styled.div`
  ${nameAndPrice}
  font-size: 22px;
  font-weight: 700;
`;
