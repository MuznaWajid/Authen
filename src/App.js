import React , {Component} from 'react';


import { Route, Switch, BrowserRouter } from 'react-router-dom';
 
import Home from './components/Home';
import login from './components/login';
import signup from './components/signup';
 import Error from './components/Error';
import Navigation from './components/Navigation';

class  App extends Component{
    render(){
        return(
            <BrowserRouter>  
        <div>
        <Navigation/>
            <Switch>
            <Route path="/" component={Home} exact/>
             <Route path="/login" component={login}/>
             <Route path="/signup" component={signup}/>
            <Route component={Error}/>
           </Switch>
        </div> 
      </BrowserRouter>
        );}
}
export default App;