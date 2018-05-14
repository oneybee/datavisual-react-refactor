import styled, { css } from 'styled-components';

const Desc = styled.p`
  font-size: 22px;
  font-family: NanumSquare;
  ${props => props.green && css`
    color: #45C67A;
    margin-bottom: 13px !important;
  `}
  ${props => props.italic && css`
    font-style: italic;
  `}
`;

export default Desc;
