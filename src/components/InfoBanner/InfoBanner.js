import React, {component} from 'react';
import './InfoBanner.scss';
import H1 from '../../elements/H1';
import InfoBanner from './block/InfoBanner';

export default function InfoBannerComponent() {
  return (
    <InfoBanner>
      <InfoBanner.Title>2015-2016 분데스리가</InfoBanner.Title>
      <InfoBanner.Card backRed>
        <InfoBanner.CardTitle>15-16</InfoBanner.CardTitle>
        <InfoBanner.CardDesc>리그 34경기</InfoBanner.CardDesc>
      </InfoBanner.Card>
      <InfoBanner.Card backBlue>
        <InfoBanner.CardTitle>챔피언</InfoBanner.CardTitle>
        <InfoBanner.CardDesc>Bayern</InfoBanner.CardDesc>
      </InfoBanner.Card>
    </InfoBanner>
  );
}
