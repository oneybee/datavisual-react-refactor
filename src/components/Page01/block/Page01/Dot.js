import React from 'react';
import styled, { css } from 'styled-components';

const Dot = styled.div`
  width: 6px;
  height: 6px;
  display: inline-block;
  border-radius: 30px;
  margin-right: 5px;
  ${props => props.red && css`
    background: rgb(255, 151, 134);
  `}
  ${props => props.blue && css`
    background: rgb(137, 166, 255);
  `}
`

export default Dot;