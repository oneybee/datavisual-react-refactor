import React from 'react';
import styled, { css } from 'styled-components';
import Title from './Title';
import Charts from './Charts';
import Pie from './Pie';
import TextLabel from './TextLabel';
import Dot from './Dot';
import CenterWrapper from './CenterWrapper';

const Page01 = styled.div`
  padding: 0 20px;
`;

Page01.Title = Title;
Page01.Charts = Charts;
Page01.Pie = Pie;
Page01.TextLabel = TextLabel;
Page01.Dot = Dot;
Page01.CenterWrapper = CenterWrapper;

export default Page01;