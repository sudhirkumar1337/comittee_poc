// EditForm.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
    Container,
    Row,
    Col,
    Form,
    Button,
    Card,
} from "react-bootstrap";

const EditTask = ({ data, onUpdate }) => {
    const { id } = useParams();
    const history = useNavigate();
    const [itemDetails, setItemDetails] = useState(null);
    const [editedItem, setEditedItem] = useState({});
  useEffect(() => {
    // Fetch details based on the ID from the URL
    const fetchDetails = async () => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        if (!response.ok) {
        throw new Error('Network response was not ok');
        }
        const itemData = await response.json();
        setItemDetails(itemData);
    } catch (error) {
        console.error('Error fetching details:', error);
    }
    };

    fetchDetails();
    }, [id]);

    if (!itemDetails) {
        return <p>Loading...</p>;
    }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedItem((prevItem) => ({
      ...prevItem,
      [name]: value,
    }));
  };

  const handleUpdate = () => {
    // Perform the update operation (e.g., send a PUT request to the server)
    onUpdate(editedItem);

    // Redirect to the table list after updating
    history.push('/');
  };

  return (
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
                                <Form onSubmit={handleUpdate}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Title</Form.Label>
                            <Form.Control 
                            type="text"
                            name="title"
                            value={itemDetails.title || ''}
                            onChange={handleInputChange}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Description</Form.Label>
                            <Form.Control 
                            type="text"
                            name="description"
                            as="textarea"
                            value={itemDetails.body || ''}
                            onChange={handleInputChange} 
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Status</Form.Label>
                        <Form.Select 
                        name="status"
                        value={itemDetails.status || ''}
                        onChange={handleInputChange}
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
                        value={itemDetails.priority || ''}
                        onChange={handleInputChange}
                        aria-label="Default select example">
                            <option>Open this select menu</option>
                            <option value="1">Low </option>
                            <option value="2">Medium</option>
                            <option value="3">High</option>
                        </Form.Select>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Update Task
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

export default EditTask;
