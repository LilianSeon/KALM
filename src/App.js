import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Connexion from './component/Connexion';
import './App';

class App extends Component{
  render(){
    return (
      <BrowserRouter>
        <Route exact path="/" component={Connexion}/>
      </BrowserRouter>
    );
  }
}

export default App;
