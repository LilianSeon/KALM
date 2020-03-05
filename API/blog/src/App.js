import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './pages/Home';
import Users from './pages/Users';

class App extends Component{




  render(){
    return(
      <BrowserRouter>

        <Route path="/" exact component={Home}/>

        <Route path="/users" exact component={Users}/>

      </BrowserRouter>
    )
  }

}


export default App;
