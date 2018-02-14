import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Game from './Game';

function App() {
  return (
    <div>
      <style jsx global>{`
       * {
         box-sizing: border-box;
         margin: 0;
         padding: 0;
       }
       body {
         background-color: #0052ff;
         width: 100%;
       }
       `}</style>
      <Switch>
        <Route exact path='/' component={ Game } />
      </Switch>
    </div>
  );
}

export default App;
