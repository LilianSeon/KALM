import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Connexion from './component/Connexion';
import Home from './component/Home';
import './App.css';
import Inscription from './component/Inscription';
import Home2 from './component/Home2';
import SalleDetail from './component/SalleDetail';

class App extends Component{
  render(){
    return (
      <BrowserRouter>
        <Route exact path="/" component={Home}/>
        <Route exact path="/connexion" component={Connexion}/>
        <Route exact path="/inscription" component={Inscription}/>
        <Route exact path="/accueil" component={Home2}/>
        <Route exact path="/salle-detail/:id" component={SalleDetail}/>
      </BrowserRouter>
    );
  }
}

export default App;
