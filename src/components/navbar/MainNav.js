import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./navbar.css";

import { FiCompass } from "react-icons/fi";
import { useState, useEffect } from "react";
function MainNav() {
  return (
    <div className="app__navbar">
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand className="d-flex align-items-center" href="#home">
            <span className="icon_compass">
              <FiCompass />
            </span>
            <div className="brand_title">
              React-Bootstrap <small>director and listing</small>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle
            className="navbar-dark"
            aria-controls="basic-navbar-nav"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Nav.Link className="link" href="#home">
                Home
              </Nav.Link>
              <Nav.Link className="link" href="#link">
                about
              </Nav.Link>
              <Nav.Link className="link" href="#link">
                Lsting
              </Nav.Link>
              <Nav.Link className="link" href="#link">
                blog
              </Nav.Link>
              <Nav.Link className="link" href="#link">
                contact
              </Nav.Link>
              <button className="add_listing">add listing</button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default MainNav;
