import React from 'react';
import { Route } from 'react-router-dom';
import Nav from './components/Nav';
import Mac from './components/Mac';
import IPad from './components/iPad';
import IPhone from './components/iPhone';
import Watch from './components/Watch';
import Tv from './components/Tv';
import Music from './components/Music';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Route exact path='/'>
        <div className="text">
          <h1>Apple Home</h1>
        </div>
      </Route>
      <Route exact path='/mac'>
          <Mac/>
      </Route>
      <Route exact path='/ipad'>
          <IPad/>
      </Route>
      <Route exact path='/iphone'>
          <IPhone/>
      </Route>
      <Route exact path='/watch'>
          <Watch/>
      </Route>
      <Route exact path='/tv'>
          <Tv/>
      </Route>
      <Route exact path='/music'>
          <Music/>
      </Route>
      <Route exact path='/support'>
        <div className="text">
          <h1>Support</h1>
        </div>
      </Route>
      <Route exact path='/search'>
        <div className="text">
          <h1>Search</h1>
        </div>
      </Route>
      <Route exact path='/bag'>
        <div className="text">
          <h1>Shopping Bag</h1>
        </div>
      </Route>
    </div>
  );
}

export default App;
