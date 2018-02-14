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
         font-family: 'Source Sans Pro', sans-serif;
         width: 100%;
       }
       button {
         outline: 0;
       }
       `}</style>
      app
      <Switch>
        <Route exact path='/' component={ Game } />
      </Switch>
    </div>
  );
}

export default App;
