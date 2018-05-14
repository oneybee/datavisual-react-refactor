import styled, { css } from 'styled-components';
import { green700, blue700 } from '../../libs/colors';
import media from '../../libs/ruucm-blocks/tools/media';
import { mNormal, mBig } from '../../libs/sizes';


const H1 = styled.h1`
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
  ${props => props.sectionTitle && css`
      position: relative;
      font-size: 32px;
      font-weight: 900;
      width: 100%;
      text-align: center;
  `}
`

export default H1;