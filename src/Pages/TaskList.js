import React,{useEffect, useState} from "react";
import {
	Container,
	Row,
	Col,
    Form,
    Button,
    Card,
    Table,
} from "react-bootstrap";
import { Link, useNavigate} from "react-router-dom";

const TaskList = ({ onDelete,onPageChange }) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const history = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);
    const totalItems = 100; // Number of items to display per page
    const itemsPerPage = 10; // Number of items to display per page

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const jsonData = await response.json();
            setData(jsonData);
          } catch (error) {
            setError(error);
          } finally {
            setLoading(false);
          }
        };
    
        fetchData();
      }, []);
    
      if (loading) {
        return <p>Loading...</p>;
      }
    
      if (error) {
        return <p>Error: {error.message}</p>;
      }

      const handleDelete = async (id) => {
        try {
          // Make a DELETE request to the API to delete the item
          await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'DELETE',
          });
    
          // Redirect to the table list after deletion
          history('/');
        } catch (error) {
          console.error('Error deleting item:', error);
        }
    };

  // Calculate total number of pages
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Calculate index range for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Get current page items
  const currentItems = data.slice(startIndex, endIndex);

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

	return(
        <>
        <Container fluid>
        <div className="content-wrapper">
            <div className="page-header">  
            <h3 class="page-title">
                        <span class="page-title-icon bg-gradient-primary text-white mr-2">
                        <i className="fas fa-list"></i>
                        </span> Task List
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
                                    <th>Title</th>
                                    <th>Description</th>
                                    <th>Status</th>
                                    <th>Priority</th>
                                    <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {currentItems.map((item) => (
                                    <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.title}</td>
                                    <td>{item.body}</td>
                                    <td>Completed</td>
                                    <td>Low</td>
                                    <td>
                                        <Link class="btn btn-primary btn-sm" to={`/ViewTask/${item.id}`}>View Task</Link>
                                        <Link class="btn btn-info btn-sm" to={`/EditTask/${item.id}`}>Edit Task</Link>
                                        <Button onClick={() => handleDelete(item.id)} variant="danger" size="sm">Delete</Button>
                                    </td>
                                    </tr>
                                ))}
                                </tbody>
                                </Table>
                                <div>
        {/* Render pagination controls */}
        {Array.from({ length: totalPages }, (_, index) => (
          <Button key={index} onClick={() => handlePageChange(index + 1)} style={{margin: 3}}>
            {index + 1}
          </Button>
        ))}
      </div>
                            </div>
                        </Card>
					</Col>
                </Row>
                </div>
			</Container>
            </>
    );
};

export default TaskList;
