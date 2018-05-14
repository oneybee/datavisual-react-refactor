import React from 'react';
import styled, { css } from 'styled-components';
import Title from './Title';
import Card from './Card';
import CardTitle from './CardTitle';
import CardDesc from './CardDesc';
import media from '../../../../libs/ruucm-blocks/tools/media'
// import { mNormal } from '../../../../libs/sizes'
import { PaddingWrapper, Row, Column, EmptySpace } from '../../../../libs/ruucm-blocks';

const InfoBannerInner = ({children}) => {
  return <Row>{children}</Row>
}

const InfoBanner = styled(InfoBannerInner)`
`;

InfoBanner.Title = Title;
InfoBanner.Card = Card;
InfoBanner.CardTitle = CardTitle;
InfoBanner.CardDesc = CardDesc;

export default InfoBanner;