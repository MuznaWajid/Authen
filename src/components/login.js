import React from 'react';
//  import './App.css';
import {Button,Form,FormGroup,Label,Input} from 'reactstrap';

import { FacebookLoginButton } from 'react-social-login-buttons';
import '../App.css';
const login = () => {
    
        return(
           
            <Form className="LoginAppForm">
            <div className="LoginApp">
            <h1 > <span className="font-weight-bold text-primary">Technovies</span>.com</h1>
            <h2 className="text-info ">Welcome To Technovies Family :) </h2>
            <FormGroup>
            <Label>Email :</Label>
            <Input type="email" placeholder="Enter Yor Email"> </Input>
             <Label>Password :</Label>
            <Input type="pass" placeholder="Enter Yor Password"></Input>
            <br/>
            <Button className="btn-block btn-dark btn-lg">Log-In</Button>
            <br/>
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
export default login;