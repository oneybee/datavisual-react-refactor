import React from 'react';
import styled from 'styled-components';

const Column = (props) => {
  let col = props.col ? ('col-sm-' + props.col) : ('');
  let mCol = props.mCol ? (' col-' + props.mCol) : ('');
  let parentClass = props.className ? (' ' + props.className) : ('');
  return <div className={col + mCol + parentClass}>{props.children}</div>
}

export default Column;
