import React from 'react';
import styled from 'styled-components';
import { log } from 'ruucm-util';

const Column = (props) => {
  log('props', props)
  let col = props.col ? ('col-sm-' + props.col) : ('');
  let mCol = props.mCol ? (' col-' + props.mCol) : ('');
  let parentClass = props.className ? (' ' + props.className) : ('');
  return <div className={col + mCol + parentClass}>{props.children}</div>
}

export default Column;
