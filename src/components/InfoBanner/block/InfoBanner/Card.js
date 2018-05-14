import React from 'react';
import styled, { css } from 'styled-components';
import { H1 } from '../../../../elements';
import media from '../../../../libs/ruucm-blocks/tools/media'
import { PaddingWrapper, Row, Column, EmptySpace } from '../../../../libs/ruucm-blocks';
import { center } from '../../../../libs/ruucm-blocks/tools/mixins'

const CenterWrapper = styled.div`
  text-align: center;
  position: absolute;
  ${center('xy')}
  width: 100%;
`

const CardInner = ({className, children}) => {
  return (
    <Column col='6' mCol='6' className={className}>
      <CenterWrapper>
        {children}
      </CenterWrapper>
    </Column>
  )
}

const Card = styled(CardInner)`
  display: inline-block;
  background-repeat: no-repeat;
  height: 90px;
  margin-top: 30px;
  position: relative;
  ${props => props.backRed && css`
    background: red;
  `}
  ${props => props.backBlue && css`
    background: blue;
  `}
  
`;


export default Card;