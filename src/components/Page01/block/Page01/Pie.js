import React from 'react';
import styled, { css } from 'styled-components';
import { Column } from '../../../../libs/ruucm-blocks';

const Pie = ({className, children}) => {
  return (
    <Column mCol='3' className={className}>
      {children}
    </Column>
  )
}
const PieStyled = styled(Pie)`
  padding: 0 !important;
  .piechart-label {
    font-size: 10px !important;
    font-weight: 700;
  }
`

export default PieStyled;