import styled, { css } from 'styled-components';
import { green700, blue700 } from '../../libs/colors';
import media from '../../libs/ruucm-blocks/tools/media';
import { mSmall,mNormal, mBig } from '../../libs/sizes';

const Span = styled.span`
  font-family: NanumSquare;
  font-size:30px;

  ${media.phone`
    font-size: ${mNormal};
  `}


  /* colors */
  ${props => props.green && css`
    color: ${green700};
  `}
  ${props => props.blue && css`
    color: ${blue700};
  `}

  /* font-weight */
  ${props => props.light && css`
    font-weight: 100;
  `}
  ${props => props.regular && css`
    font-weight: 400;
  `}
  ${props => props.bold && css`
    font-weight: 700;
  `}
  ${props => props.eb && css`
    font-weight: 900;
  `}

  /* font-size */
  ${props => props.fontSize && css`
    font-size: ${props => props.fontSize};
  `}
  ${props => props.size28 && css`
    font-size: 28px;
  `}
  ${props => props.size30 && css`
    font-size: 30px;
  `}
  ${props => props.size32 && css`
    font-size: 32px;
  `}
  ${props => props.size40 && css`
    font-size: 40px;
  `}
  ${props => props.size60 && css`
    font-size: 60px;
  `}
  ${props => props.size80 && css`
    font-size: 80px;
  `}
  ${props => props.size100 && css`
    font-size: 100px;
  `}

  /* types */
  ${props => props.main && css`
    font-size: 110px;
    font-weight: 900;
  `}
  ${props => props.primaryLeft && css`
    color: red;
    text-align: left;
  `}
  ${props => props.primaryRight && css`
    text-align: right;
  `}
`

export default Span;