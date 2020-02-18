import React from 'react';
import Homepage from '../../pages/homepage/Homepage.component';
import { Switch, Route } from 'react-router-dom';
import './App.styles.scss';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Homepage}/>
      </Switch>
    </div>
  );
}

export default App;
