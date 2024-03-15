import React from "react";
import {
	Container,
	Row,
	Col,
    Card,
} from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";

const Home = () => {
    return(
      <>
      <Container fluid>
      <div className="content-wrapper">
      <div className="page-header">  
      <h3 class="page-title">
                <span class="page-title-icon bg-gradient-primary text-white mr-2">
                <i className="fas fa-home"></i>
                </span> Dashboard
              </h3>
      </div>        
      <Row>
        <Col>
                <div class="card bg-gradient-danger card-img-holder text-white">
                  <div class="card-body">
                    <h4 class="font-weight-normal mb-3">Total Task <i className="fas fa-heart float-right"></i>
                    </h4>
                    <h2 class="mb-5">20</h2>
                  </div>
                </div>
        </Col>
        <Col>
        <div class="card bg-gradient-info card-img-holder text-white">
                  <div class="card-body">
                    <h4 class="font-weight-normal mb-3">Completed Task <i className="fas fa-star float-right"></i>
                    </h4>
                    <h2 class="mb-5">5</h2>
                  </div>
                </div>
        </Col>
        <Col>
        <div class="card bg-gradient-success card-img-holder text-white">
                  <div class="card-body">
                    <h4 class="font-weight-normal mb-3">Upcoming Task <i className="fas fa-face-smile float-right"></i>
                    </h4>
                    <h2 class="mb-5"> 15</h2>
                  </div>
                </div>
        </Col>
      </Row>
      </div>
    </Container>
      </>
    );
  };
  
  export default Home;