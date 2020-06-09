import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

import "./Fiche.css";
import {
  FaTwitterSquare,
  FaLinkedin,
  FaDownload,
  FaFacebookSquare,
  FaInstagramSquare,
} from "react-icons/fa";

class Fiche extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          nomSociete: "",
        },
      ],
      urlFb: "",
    };
  }

  getReseauFb = () => {
    if (this.state.urlFb) {
      return (
        <a className="socialIcon" href={this.state.urlFb} target="_blank">
          {" "}
          <FaFacebookSquare
            className="socialIcon"
            size={48}
            style={{ color: "#f7316b" }}
          />
        </a>
      );
    } else {
      return;
    }
  };
  // mettre des balises LINK pour
  getReseauTwitter = () => {
    if (this.state.urlTwitter) {
      return (
        <a className="socialIcon" href={this.state.urlTwitter} target="_blank">
          {" "}
          <FaTwitterSquare
            className="socialIcon"
            size={48}
            style={{ color: "#f7316b" }}
          />
        </a>
      );
    } else {
      return;
    }
  };

  getReseauLinkedin = () => {
    if (this.state.urlLinkedIn) {
      return (
        <a className="socialIcon" href={this.state.urlLinkedIn} target="_blank">
          {" "}
          <FaLinkedin
            className="socialIcon"
            size={48}
            style={{ color: "#f7316b" }}
          />
        </a>
      );
    } else {
      return;
    }
  };

  getReseauInsta = () => {
    if (this.state.urlInsta) {
      return (
        <a className="socialIcon" href={this.state.urlInsta} target="_blank">
          {" "}
          <FaInstagramSquare
            className="socialIcon"
            size={48}
            style={{ color: "#f7316b" }}
          />
        </a>
      );
    } else {
      return;
    }
  };

  componentDidMount() {
    const options = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      mode: "cors",
    };

    const id = this.props.match.params.id; //via route  params
    fetch("http://localhost:8080/annuaire/detail?id=" + id, options)
      .then((response) => response.json())
      .then(
        (data) => {
          this.setState({
            nomSociete: data.nomSociete,
            adresseSociete: data.adresseSociete,
            complementAdresse: data.complementAdresse,
            codePostal: data.codePostal,
            ville: data.ville,
            tel: data.tel,
            mailPro: data.mailPro,
            urlSite: data.urlSite,
            urlFb: data.urlFb,
            urlInsta: data.urlInsta,
            urlLinkedIn: data.urlLinkedIn,
            urlTwitter: data.urlTwitter,
            secteurActivite: data.secteurActivite,
            descriptionActivite: data.descriptionActivite,
            logo: data.logo,
            photoCouverture: data.photoCouverture,
            brochure: data.brochure,
            nomDuRepresentant: data.nomDuRepresentant,
            prenomDuRepresentant: data.prenomDuRepresentant,
            fonctionDuRepresentant: data.fonctionDuRepresentant,
            citationCiu: data.citationCiu,
            photoPortrait: data.photoPortrait,
          });
        },
        (error) => {
          console.log(error);
        }
      );
  }

  render() {
    return (
      <div className="conteneurFiche">
        <div className="card1Fiche">
          <Card
            style={{
              width: "45rem",
              height: "65rem",
              border: "solid",
              borderRadius: 10,
              borderColor: "#d6d1d3",
            }}
          >
            <Card.Img
              variant="top"
              src={"http://localhost:8080/image/" + this.state.photoCouverture}
              className="imgFiche1"
            />
            <Card.Body>
              <div className="conteneurHeaderFiche colorFiche">
                <div className="logoFiche">
                  {" "}
                  <img
                    src={"http://localhost:8080/image/" + this.state.logo}
                    style={{
                      width: "200px",
                      height: "80px",
                    }}
                  />
                </div>
                <div className="brochureFiche">
                  Télécharger la brochure
                  <br />
                  de la société
                </div>
                <div className="downFiche">
                  <a
                    className="downloadFiche"
                    href={"http://localhost:8080/image/" + this.state.brochure}
                    target="_blank"
                  >
                    {" "}
                    <FaDownload
                      className="downloadFiche"
                      size={30}
                      style={{ color: "#f7316b" }}
                    />{" "}
                  </a>
                </div>
              </div>
              <Card.Title className="titreFiche">
                {this.state.nomSociete}
              </Card.Title>
              <Card.Text className="cardFiche1 colorFiche sizeFiche">
                {this.state.descriptionActivite}
              </Card.Text>
              <Card.Text className="cardFiche2">
                <p className="pFiche1">Secteur d'activité</p>
                <p className="pFiche2 colorFiche">
                  {this.state.secteurActivite}
                </p>
              </Card.Text>
              <Card.Text className="cardFiche2">
                <p className="pFiche1">Coordonnées</p>
                <table className="colorFiche sizeFiche">
                  <tr>
                    <td className="coordonneeFiche">Adresse:</td>
                    <td className="donneeFiche">
                      {this.state.adresseSociete} {this.state.complementAdresse}
                    </td>
                  </tr>
                  <tr>
                    <td className="coordonneeFiche"></td>
                    <td className="donneeFiche">
                      {this.state.codePostal} {this.state.ville}
                    </td>
                  </tr>
                  <tr>
                    <td className="coordonneeFiche">Téléphone:</td>
                    <td className="donneeFiche">{this.state.tel}</td>
                  </tr>
                  <tr>
                    <td className="coordonneeFiche">Email:</td>
                    <td className="donneeFiche">{this.state.mailPro}</td>
                  </tr>
                  <tr>
                    <td className="coordonneeFiche">Site web:</td>

                    <td className="donneeFiche">
                      <a href={this.state.urlSite} target="_blank">{this.state.urlSite}</a></td>

                  </tr>
                </table>
              </Card.Text>
              <Card.Text className="cardFiche3">
                <p className="pFiche1">Réseaux Sociaux</p>

                {this.getReseauFb()}
                {this.getReseauInsta()}
                {this.getReseauLinkedin()}
                {this.getReseauTwitter()}
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div className="card2Fiche">
          <Card
            style={{
              width: "21rem",
              height: "30rem",
              border: "solid",
              borderRadius: 10,
              borderColor: "#d6d1d3",
            }}
          >
            <div class="card-body pt-5">
              <img
                src={"http://localhost:8080/image/" + this.state.photoPortrait}
                alt="Photo-portrait"
                className="profileFiche"
              />
              <Card.Body>
                <Card.Text style={{ marginTop: "40px" }}>
                  <p className="pFiche1">Dirigeant</p>
                  <p className="pFiche2 colorFiche">
                    {this.state.prenomDuRepresentant}{" "}
                    {this.state.nomDuRepresentant}
                  </p>
                  <p className="colorFiche sizeFiche">
                    {this.state.fonctionDuRepresentant}
                  </p>
                </Card.Text>
                <Card.Text>
                  <p className="pFiche1">Parole de membre</p>
                  <p className="colorFiche sizeFiche">
                    {this.state.citationCiu}
                  </p>
                </Card.Text>
              </Card.Body>
            </div>
          </Card>
        </div>
      </div>
    );
  }
}

export default Fiche;
