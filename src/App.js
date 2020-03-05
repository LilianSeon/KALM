import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Connexion from './component/Connexion';
import Home from './component/Home';
import './App.css';
import Inscription from './component/Inscription';

class App extends Component{
  render(){
    return (
      <BrowserRouter>
        <Route exact path="/" component={Home}/>
        <Route exact path="/connexion" component={Connexion}/>
        <Route exact path="/Inscription" component={Inscription}/>
      </BrowserRouter>
    );
  }
}

export default App;
