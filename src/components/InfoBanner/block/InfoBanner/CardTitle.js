import styled, { css } from 'styled-components';
import { H1 } from '../../../../elements';
import media from '../../../../libs/ruucm-blocks/tools/media'


const CardTitle = styled.div`
  ${media.phone`
    line-height: 3.3em;
    font-weight: 900;
  `}
`

export default CardTitle;