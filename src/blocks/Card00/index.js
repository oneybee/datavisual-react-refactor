import styled, { css } from 'styled-components';
import Title from './Title';
import Desc from './Desc';
import media from '../../libs/ruucm-blocks/tools/media'
import { mNormal } from '../../libs/sizes'

const Card00 = styled.div`
text-align: left;
font-size: 30px;
font-family: NanumSquare;
${media.phone`
    font-size: ${mNormal}
    padding-top: 20px;
  `}
`

Card00.Title = Title;
Card00.Desc = Desc;

export default Card00;