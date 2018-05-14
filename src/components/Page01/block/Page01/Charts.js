import React from 'react';
import styled, { css } from 'styled-components';
import { Row } from '../../../../libs/ruucm-blocks';

const ChartsInner = ({className, children}) => {
  return <Row className={className}>{children}</Row>
}

const Charts = styled(ChartsInner)`
  padding: 0 10px;
`;

export default Charts;