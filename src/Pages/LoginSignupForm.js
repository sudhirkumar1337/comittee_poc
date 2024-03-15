import React, { useState } from 'react';
import axios from 'axios';
import Home from "./Home";
import { Form, Button, Col,Row,Card,Container,Alert } from 'react-bootstrap';
import { useNavigate} from "react-router-dom";

function LoginSignupForm() {
  const [isSignup, setIsSignup] = useState(false); // Toggles between Login and Signup
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const history = useNavigate();
 
  const handleSubmit = async (event) => {
    event.preventDefault();
 
    const validationErrors = []; // Array to store validation errors
 
    // Validate username (common for both login and signup)
    if (!username.trim()) {
      validationErrors.push('Username is required');
    }
 
    // Validate email (common for both login and signup)
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      validationErrors.push('Invalid email format');
    }
 
    // Validate password (common for both login and signup)
    if (!password.trim()) {
      validationErrors.push('Password is required');
    } else if (password.length < 8) {
      validationErrors.push('Password must be at least 8 characters long');
    }
 
    // Additional validation for Signup
    if (isSignup) {
      if (!confirmPassword.trim()) {
        validationErrors.push('Confirm password is required');
      } else if (confirmPassword !== password) {
        validationErrors.push('Passwords do not match');
      }
    }
 
    // Display validation errors if any
    if (validationErrors.length > 0) {
      setErrorMessage(validationErrors.join('\n'));
      return;
    }
 
    // Simulate login or signup logic (replace with API calls or other logic)
    console.log(
      isSignup
        ? `Signing up: Username: ${username}, Email: ${email}, Password: ${password}`
        : `Logging in: Username: ${username},Email: ${email}, Password: ${password}`,history('/Home')
    );
 
    setUsername('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setErrorMessage(''); // Clear error message after successful simulation
  };
 
  const toggleSignup = () => setIsSignup(!isSignup);
 
  return (
    <>
    <Container fluid>
    <Row>
        <Col xs lg={{span:"6", offset:"3"}}>
            <Card> 
                <div className="card-body">   
    <div className="login-signup-form">
      <h1>{isSignup ? 'Sign Up' : 'Login'}</h1>
      {errorMessage && 
      <Alert key="danger" variant="danger">
      {errorMessage}
    </Alert>
      }
      <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId='formUsername'>
                        <Form.Label>Username</Form.Label>
                        <Form.Control 
                            type="text"
                            id="username"
                            value={username}
                            onChange={(event) => setUsername(event.target.value)}
                            />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId='formEmail'>
                    <Form.Label>Email</Form.Label>
                        <Form.Control 
                            type="email"
                            id="email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            />
                    </Form.Group>

        
          <Form.Group className="mb-3" controlId='formPassword'>
                    <Form.Label>Password</Form.Label>
                        <Form.Control 
                            type="password"
                            id="password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            />
                    </Form.Group>
        {isSignup && ( // Only show password confirmation for Signup
          <>
                    <Form.Group className="mb-3" controlId='formConfirmPassword'>
                    <Form.Label>Confirm Password</Form.Label>
                        <Form.Control 
                            type="password"
                            id="confirmPassword"
                            value={confirmPassword}
                            onChange={(event) => setConfirmPassword(event.target.value)}
                            />
                    </Form.Group>
          </>
        )}
        <br></br>
        <Button type="submit">{isSignup ? 'Sign Up' : 'Login'}</Button>
      </Form>
      <p>
        {isSignup
          ? 'Already have an account? Login here.'
          : "Don't have an account? Sign Up here."}
        <Button onClick={toggleSignup}>{isSignup ? 'Login' : 'Sign Up'}</Button>
      </p>
    </div>
    </div>
            </Card>
        </Col>
    </Row> 
    </Container>
    </>        
  );
}
 
export default LoginSignupForm