import React,{useEffect, useState} from "react";
import { useParams } from 'react-router-dom';
import {
	Container,
	Row,
	Col,
    Card,
    Table,
} from "react-bootstrap";

const ViewTask = ({ onDelete }) => {
    const { id } = useParams();
    const [itemDetails, setItemDetails] = useState(null);

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

	return(
        <>
        <Container fluid>
        <div className="content-wrapper">
            <div className="page-header">  
            <h3 class="page-title">
                        <span class="page-title-icon bg-gradient-primary text-white mr-2">
                        <i className="fas fa-list"></i>
                        </span> Task Details
                    </h3>
            </div>
            
				<Row>
                    <Col xs lg="12">
                        <Card> 
                            <div className="card-body">       
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                    <th>#</th>
                                    <td>{itemDetails.id}</td>
                                    </tr>
                                    <tr>
                                    <th>Title</th>
                                    <td>{itemDetails.title}</td>
                                    </tr>
                                    <tr>
                                    <th>Description</th>
                                    <td>{itemDetails.body}</td>
                                    </tr>
                                    <tr>
                                    <th>Status</th>
                                    <td>Completed</td>
                                    </tr>
                                    <tr>
                                    <th>Priority</th>
                                    <td>High</td>
                                    </tr>
                                    <tr>
                                    <th>Created At</th>
                                    <td></td>
                                    </tr>
                                </thead>
                                </Table>
                            </div>
                        </Card>
					</Col>
                </Row>
                </div>
			</Container>
            </>
    );
};

export default ViewTask;
