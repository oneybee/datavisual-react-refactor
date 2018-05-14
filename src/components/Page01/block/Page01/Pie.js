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

export default Pie;