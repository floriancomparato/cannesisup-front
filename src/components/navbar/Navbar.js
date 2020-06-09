import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import "./navbar.css";

/* imports components */

class Navbar extends Component {
  render() {
    return (
      <Container fluid>
        <div className="containernav">
          <ul className="topnav">
            <Link to="/">
              <li>
                <img alt="logo" src="./images/logo.png" />
              </li>
            </Link>
            <Link to="/">
              <li>accueil</li>
            </Link>
            <Link to="/annuaire">
              <li>annuaire</li>
            </Link>
            <Link to="/formulaire">
              <li>devenez adhérent</li>
            </Link>

            <Link to="/login">
              <li>se connecter</li>
            </Link>
          </ul>
        </div>
      </Container>
    );
  }
}

export default Navbar;
