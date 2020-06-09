import React, { Component } from "react";
import { Link } from "react-router-dom";

import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaYoutubeSquare,
  FaTwitterSquare,
} from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";

import "./Footer.css";

class Footer extends Component {
  render() {
    return (
      <Container fluid className=" footer">
        <Row className="align-items-center text-center h-100">
          <Col md lg="8">
            <a className="copyright">
              Copyright © <span className="text-uppercase">CANNES IS UP </span>{" "}
            </a>
            <a className="copyright" href="">
              Mentions légales
            </a>{" "}
            <a
              className="copyright"
              href="https://bluebeacon.fr/"
              target="_blank"
            >
              Réalisation : BLUE BEACON
            </a>
          </Col>
          <Col md lg="4">
            <a
              className="socialIcon"
              href="https://www.facebook.com/cannesisup/"
              target="_blank"
            >
              {" "}
              <FaFacebookSquare
                className="socialIcon"
                size={48}
                style={{ color: "#f7f7f7" }}
              />
            </a>
            <a
              className="socialIcon"
              href="https://www.instagram.com/cannesisup/"
              target="_blank"
            >
              <FaInstagramSquare
                className="socialIcon"
                size={48}
                style={{ color: "#f7f7f7" }}
              />
            </a>
            <a
              className="socialIcon"
              href="https://www.youtube.com/channel/UCBIpW614EFQGZrFVl6ARsAw"
              target="_blank"
            >

              <FaYoutubeSquare
                className="socialIcon"
                size={48}
                style={{ color: "#f7f7f7" }}
              />
            </a>
            <a
              className="socialIcon"
              href="https://twitter.com/cannesisup"
              target="_blank"
            >

              <FaTwitterSquare
                className="socialIcon"
                size={48}
                style={{ color: "#f7f7f7" }}
              />
            </a>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Footer;
