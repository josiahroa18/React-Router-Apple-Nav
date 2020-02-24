import React from 'react';
import { Route } from 'react-router-dom';
import Nav from './components/Nav';
import Mac from './components/Mac';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Route exact path='/'></Route>
      <Route exact path='/mac'>
          <Mac/>
      </Route>
      <Route exact path='/ipad'>
          <h1>iPad</h1>
      </Route>
      <Route exact path='/iphone'>
          <h1>iPhone</h1>
      </Route>
      <Route exact path='/watch'>
          <h1>Watcg</h1>
      </Route>
      <Route exact path='/tv'>
          <h1>TV</h1>
      </Route>
      <Route exact path='/music'>
          <h1>Music</h1>
      </Route>
      <Route exact path='/support'>
          <h1>Support</h1>
      </Route>
      <Route exact path='/search'>
          <h1>Search</h1>
      </Route>
      <Route exact path='/bag'>
          <h1>Shopping Bag</h1>
      </Route>
    </div>
  );
}

export default App;
