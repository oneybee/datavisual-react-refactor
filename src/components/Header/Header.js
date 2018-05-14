import React, {component} from 'react';
import './Header.scss';
import img from '../../../assets/images/profile.jpg'

export default function HeaderComponent() {
  return (
    <div className="header"> 
      <div className="nav">
        <span className="chief-mate chief-mate-menu"></span>
        <a className="profile-img"><img src={img}/></a>
      </div>
    </div>
  );
}
