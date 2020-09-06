import React,{Component} from 'react';
//  import './App.css';
import {Button,Form,FormGroup,Label,Input} from 'reactstrap';

import { FacebookLoginButton } from 'react-social-login-buttons';
import firebase  from '../configuration/firebase';
import '../App.css';

class Login extends Component{
  constructor(props) {
    super(props);
    this.loginToDashboard = this.loginToDashboard.bind(this);
    this.hanleChange = this.hanleChange.bind(this);
    this.state = {
        email: "",
        password: "",
        open: false,
        error:''
    }
}
loginToDashboard(e) {
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
        console.log(u.user.email, u.user.uid)
        localStorage.setItem("email", u.user.email)
        localStorage.setItem("uid", u.user.uid)
    }).catch(err => {
        console.log(err)
        this.setState({error:err.message})
        this.setState({ open: true })
        // window.alert(err.message)
        
    })

}
hanleChange(e) {
  this.setState({
      [e.target.name]: e.target.value
  })
}
  render(){
    return(
      <Form className="LoginAppForm">
      <div className="LoginApp">
      <h1 > <span className="font-weight-bold text-primary">Login</span>.com</h1>
      <h2 className="text-info ">Welcome To Technovies Family :) </h2>
      <FormGroup>
      <Label>Email :</Label>
      <Input type="email" name="email" placeholder="Enter Yor Email"  onChange={this.hanleChange}
      value={this.state.email}> </Input>
       <Label>Password :</Label>
      <Input type="password" name="password" placeholder="Enter Yor Password" onChange={this.hanleChange}
      value={this.state.password}></Input>
      <br/>
      <Button className="btn-block btn-dark btn-lg" onClick={this.loginToDashboard}>Log-In</Button>
     <div className="text-center pt-3">Or Continue with Your Social Account</div>
      <FacebookLoginButton className ="mt-3 mb-3"></FacebookLoginButton>
      <div className="text-center">
      <a href="/signup">Sign-Up</a>
      <span className="p-2">|</span>
      <a href="/Forgot Password">Forgot Password</a></div>
      
      </FormGroup></div>
      </Form>
      );
    }
}
export default Login;

