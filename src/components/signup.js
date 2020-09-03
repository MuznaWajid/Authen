import React from "react";
// import "./App.css";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

import { FacebookLoginButton } from "react-social-login-buttons";
import '../App.css';
const signup = () =>  {
 
    return (
      <Form className="LoginAppForm">
        <div className="LoginApp">
          <h1>
            {" "}
            <span className="font-weight-bold text-primary">Technovies</span>
            
          </h1>
          <h2 className="text-info ">Welcome To Technovies :) </h2>
          <FormGroup>
          <Label>UserName :</Label>
            <Input type="username" placeholder="Enter UserName"></Input>
         
            <Label>UserEmail :</Label>
            <Input type="email" placeholder="Enter Your Email">
            </Input>
            <Label>Create Password :</Label>
            <Input type="pass" placeholder="Enter Your Password"></Input>
            <Label>Re Create Password :</Label>
            <Input type="pass" placeholder="Enter Yor Password"></Input>
            <br />
            <Button className="btn-block btn-dark btn-lg">Sign-Up</Button>
          
            <div className="text-center pt-3">
              Or Continue with Your Social Account
            </div>
            <FacebookLoginButton className="mt-3 mb-3"></FacebookLoginButton>
            
          </FormGroup>
        </div>
      </Form>
    );
  }

export default signup;
