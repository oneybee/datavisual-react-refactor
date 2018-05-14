import React from 'react';
import styled, { css } from 'styled-components';
import { H1 } from '../../../../elements';
import media from '../../../../libs/ruucm-blocks/tools/media'
import { PaddingWrapper, Row, Column, EmptySpace } from '../../../../libs/ruucm-blocks';

const CardInner = ({children}) => {
  return <Column col='6' mCol='6'>{children}</Column>
}

const Card = styled(CardInner)`
`;


export default Card;