// components/dashboard.js
import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'reactstrap';
import firebase from '../configuration/firebase';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      uid: ''
    }
  }

  // componentDidMount(){this.authListener();}
  // authListener() {
  //   firebase.auth().onAuthStateChanged((uid)=> {
  //     if (uid){this .setState({uid})}
  //     else{this .setState({uid:null}) }
  //   })
    
  // }  

  render() {
    // this.state = { 
    //   displayName: firebase.auth().currentUser.displayName,
    //   uid: firebase.auth().currentUser.uid
    // }    
    return (
        <div>
        <h1 className="text-info " >Welcome To Technovies Family </h1>
         <p>Perfection is achieved not when there is nothing more to add, but rather when there is nothing more to take away.”</p>
     </div>
    );}}
    
    
