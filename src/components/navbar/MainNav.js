import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import About from "../../pages/About";
import "./navbar.css";
import { Link, Route, Routes } from "react-router-dom";
import { FiCompass } from "react-icons/fi";
import { useState, useEffect } from "react";
function MainNav() {
  return (
    <div className="app__navbar">
      <Navbar expand="lg">
        <div className="container">
          <Navbar.Brand className="d-flex align-items-center" href="#home">
            <span className="icon_compass">
              <FiCompass />
            </span>
            <div className="brand_title">
              Directone <small>director and listing</small>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle
            className="navbar-dark"
            aria-controls="basic-navbar-nav"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="#">
                <Link className="link" to="/">
                  {" "}
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link href="">
                <Link className="link" to="/about">
                  {" "}
                  about
                </Link>
              </Nav.Link>
              <Nav.Link href="#">
                <Link className="link" to="/listing">
                  {" "}
                  listing
                </Link>
              </Nav.Link>
              <Nav.Link href="#">
                <Link className="link" to="/blog">
                  {" "}
                  blog
                </Link>
              </Nav.Link>
              <Nav.Link href="#">
                <Link className="link" to="/contact">
                  contact
                </Link>
              </Nav.Link>
              <button className="add_listing">add listing</button>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
}

export default MainNav;
