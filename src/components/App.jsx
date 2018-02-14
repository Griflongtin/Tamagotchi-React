import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Game from './Game';

function App() {
  return (
    <div>
      google
      <Switch>
        <Route exact path='/' component={ Game } />
      </Switch>
    </div>
  );
}

export default App;
