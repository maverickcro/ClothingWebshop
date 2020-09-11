import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../src/pages/Homepage/homepage.component';

const HatsPage = (props) => {
  console.log(props);
  return(
    <div>
      <h2>Hats Page</h2>
    </div>
  );
};

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
