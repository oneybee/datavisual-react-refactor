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


/* <div className="info-banner row">
  <a className="section-title"><p>2015-2016 분데스리가</p></a>
  <div className="item item-01 col-6">
    <div className="item-inner">
      <h1>15-16</h1>
      <p>리그 34경기</p>
    </div>
  </div>
  <div className="item item-02 col-6">
    <div className="item-inner">
      <h1>챔피언</h1>
      <p>Bayern</p>
    </div>
  </div>
</div> */