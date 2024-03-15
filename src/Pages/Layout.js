import React from "react";
import { Outlet, Link } from "react-router-dom";
import logo from "../logo.svg";

import {
	Container,
	Navbar,
	Nav,
	NavDropdown
} from "react-bootstrap";

const Layout = () => {
  return (
    <>
		<Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"><img
										src={logo}
										alt="avatar"
										className="img-fluid 
												rounded-circle"
										style={{
											width: 36,
										}}
									/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/AddTask">Add Task</Nav.Link>
            <Nav.Link href="/TaskList">Task List</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Outlet />
    </>
  )
};

export default Layout;