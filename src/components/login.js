import React, { useContext, createContext, useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Form } from 'react-bootstrap';
import '../css/login.css'
import { useAuth } from "../Auth"
import {
    BrowserRouter as Router,
    useHistory,
    useLocation
  } from "react-router-dom";

export function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const auth = useAuth()
    let history = useHistory();
    let location = useLocation();
  
    function validateForm() {
      return email.length > 0 && password.length > 0;
    }
  
    function handleSubmit(event) {
        let { from } = location.state || { from: { pathname: "/" } };
        auth.signin(email, password, () => {
            history.replace(from);
        })
        event.preventDefault();
    }

    return (
      <div className="login">
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              autoFocus
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button block type="submit" disabled={!validateForm()}>
            Login
          </Button>
        </Form>
      </div>
    );
  }