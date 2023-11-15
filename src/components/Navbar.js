import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import React from 'react';
import Login from "./loginsignup";
import { useState } from "react";
import axios from "axios";
import Popup from "reactjs-popup";
import Col from "react-bootstrap/Col";




function Navbar1() {

  const [login, setlogin] = useState("Login/SignUp");

  axios
    .post("https://book-my-show-back-end.onrender.com/check")
    .then((response) => {
      console.log(response.data);
      setlogin(response.data);
    })
    .catch((error) => {
      "error";
    });
  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand href="#">OnlineTicketing</Navbar.Brand>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              
              />
              <Button variant="outline-success">Search</Button>
            </Form>
                <Nav className="justify-content-center d-flex row" activeKey="/home">
              <Nav.Item>
                <Popup
                  trigger={<Nav.Link eventKey="link-3">{login}</Nav.Link>}
                  modal
                  nested
                  closeOnDocumentClick
                >
                  <div>
                    <Login />
                  </div>
                </Popup>
              </Nav.Item>
            
              </Nav>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  User
                </Offcanvas.Title>
              </Offcanvas.Header>

              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Profile</Nav.Link>
                  <Nav.Link href="#action2">MyTickets</Nav.Link>
                  <NavDropdown
                    title="Dropdown"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Help</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Rewards
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Notification
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Navbar1;