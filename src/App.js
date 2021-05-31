import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Index from './components';
import WeatherAuto from './components/WeatherAuto';
import WeatherManual from './components/WeatherManual';

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Index}/>
        <Route path="/weather-auto" component={WeatherAuto}/>
        <Route path="/weather-manual" component={WeatherManual}/>
      </Switch>
    </HashRouter>
  );
}

export default App;
