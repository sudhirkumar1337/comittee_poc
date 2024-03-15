import React,{useState} from "react";
import {
    Container,
    Row,
    Col,
    Form,
    Button,
    Card,
} from "react-bootstrap";

const AddTask = () => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        status:'',
        priority:'',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = async () => {
        try {
          const response = await fetch('http://localhost:3001/api/save-data', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            //body: JSON.stringify({ key1: 'value1', key2: 'value2' }), // Your data object
            body:formData,
          });
      
          if (response.ok) {
            console.log('Data sent successfully');
          } else {
            console.error('Failed to send data');
          }
        } catch (error) {
          console.error('Error:', error);
        }
      };
	return(
        <>
        <Container fluid>
        <div className="content-wrapper">
            <div className="page-header">  
            <h3 class="page-title">
                        <span class="page-title-icon bg-gradient-primary text-white mr-2">
                        <i className="fas fa-home"></i>
                        </span> Add Task
                    </h3>
            </div>
            
				<Row
				>

					<Col xs lg="6">
                        <Card> 
                            <div className="card-body">       
                                <Form onSubmit={handleSubmit} method="post">
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Title</Form.Label>
                    <Form.Control 
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange} 
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Description</Form.Label>
                    <Form.Control 
                    type="text"
                    name="description"
                    as="textarea"
                    value={formData.description}
                    onChange={handleChange} 
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Status</Form.Label>
                  <Form.Select 
                  name="status"
                  value={formData.status}
                  onChange={handleChange} 
                  aria-label="Default select example">
                    <option>Open this select menu</option>
                    <option value="1">Completed </option>
                    <option value="0">Pending</option>
                  </Form.Select>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Priority</Form.Label>
                  <Form.Select 
                  name="priority"
                  value={formData.priority}
                  onChange={handleChange} 
                  aria-label="Default select example">
                    <option>Open this select menu</option>
                    <option value="1">Low </option>
                    <option value="2">Medium</option>
                    <option value="3">High</option>
                  </Form.Select>
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Add Task
                  </Button>
                </Form>
                </div>
                </Card>
					</Col>

				</Row>
                </div>
			</Container>
            </>
    );
};

export default AddTask;
