import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import AppContainer from '/imports/client/containers/App.js';
import MapContainer from '/imports/client/containers/Map.js';
import FavesContainer from '/imports/client/containers/FavesContainer.js';
import Faves from '/imports/client/components/Faves.js';
import Places from '/imports/client/components/Places.js';
import LeafletMap from '/imports/client/components/LeafletMap.js';

export const renderRoutes = () => (
	<Router history={browserHistory}>
    <Route path="/" component={AppContainer}>
      <IndexRoute component={ Places } />
    </Route>
    <Route path="/map" component={MapContainer}>
      <IndexRoute component={ LeafletMap } />
    </Route>
    <Route path="/faves" component={FavesContainer}>
      <IndexRoute component={ Faves } />
    </Route>
  </Router>
);