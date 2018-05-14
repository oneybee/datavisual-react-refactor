import React from 'react';
import Interactive from 'react-interactive';
import { Switch, Route } from 'react-router-dom';
import Page01Component from './Page01';
import AboutComponent from './About';
import Page02Component from './Page02';
import HeaderComponent from './Header';
import PageNotFound from './PageNotFound';
import BottomNavComponent from './BottomNav';
import './AppStyle';

export default function App() {
  return (
    <div className='app'>
      <HeaderComponent />
      <Switch>
        <Route exact path="/" component={Page01Component} />
        <Route path="/about" component={AboutComponent} />
        <Route path="/wins" component={Page02Component} />
        <Route component={PageNotFound} />
      </Switch>
      <BottomNavComponent />
    </div>
  );
}
