import styled, { css } from 'styled-components';
import { H1 } from '../../elements';
import media from '../../libs/ruucm-blocks/tools/media'
import { mBig } from '../../libs/sizes'


const Title = styled.div`
  color: #071A52;
  font-size: 28px;
  font-family: NanumSquare;
  line-height: 2em;
  ${media.phone`
    font-size: ${mBig}
    line-height: 3.3em;
    font-weight: 900;
  `}
`

export default Title;