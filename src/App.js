import React , {Component} from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
 
import Home from './components/Home';
import Login from './components/login';
import signup from './components/signup';
 import Error from './components/Error';
import Navigation from './components/Navigation';
import Dashboard from './components/Dashboard';
import firebase from './configuration/firebase'

class  App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    }
  }
  componentDidMount() {
    this.authListner()
  }
  authListner() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user })
      } else {
        this.setState({ user: null })
      }
    })
  }
    render(){
        return(

            
        <div>
        
        <Navigation/>
            <Switch>
            <Route path="/" component={Home} exact/>
             <Route path="/login" component={Login}/>
             <Route path="/signup" component={signup}/>
            <Route component={Error}/>

           </Switch>
           {this.state.user ? (<Dashboard />) : (<Login />)}
        </div> 
 
        );
    }
}
export default App;