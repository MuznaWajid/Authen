
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
            <span className="font-weight-bold text-primary">Sing-Up</span>.Com
            
          </h1>
          <h2 className="text-info ">Welcome To Technovies Family:) </h2>
          <FormGroup>
          <Label>User Name Full :</Label>
            <Input type="username" placeholder="Enter UserName"></Input>
         
            <Label>User Email :</Label>
            <Input type="email" placeholder="Enter Your Email">
            </Input>
            <Label>Create Password :</Label>
            <Input type="password" placeholder="Enter Your Password"></Input>
          <br />
            <Button className="btn-block btn-dark btn-lg">Sign-Up</Button>
          
            <div className="text-center pt-3">
              Or Continue with Your Social Account
          <FacebookLoginButton className="mt-3 mb-3 text-center"></FacebookLoginButton>
            </div>
            
          </FormGroup>
        </div>
      </Form>
    );
  }

export default signup;