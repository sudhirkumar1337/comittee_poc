import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Col,Row,Card,Container } from 'react-bootstrap';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    const body = {
      email, password
    };

    try {
      await axios.post('/login', body);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
    <Container fluid>
    <Row>
        <Col xs lg={{span:"6", offset:"3"}}>
            <Card> 
                <div className="card-body">   
                <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
    </Form>
                </div>
            </Card>
        </Col>
    </Row> 
    </Container>
    </>               
  );
};

export default LoginPage;