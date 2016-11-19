import React from 'react';
import { Router, Routes, hashHistory } from 'react-router';
import { MainContainer } from '../containers';

const routes = (
  <Router history={hashHistory}>
    <Router path="/" component={MainContainer} />
  </Router>
);

export default routes;