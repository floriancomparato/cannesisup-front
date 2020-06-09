import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Annuaire.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Navbar from "../navbar/Navbar";
import { Redirect } from "react-router-dom";

class Annuaire extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      redirect: false,
      search: "",
      adherantFiltred: [],
    };
  }

  // Fonction limitaion du texte
  limitText = (text) => {
    return text.substr(0, 95);
  };

  //*******Fetch */
  componentDidMount() {
    /* Options, paramètres de la requête */
    const options = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      mode: "cors",
    };

    fetch("http://localhost:8080/annuaire", options)
      .then((response) => response.json())
      .then(
        (data) => {
          this.setState({
            adherantFiltred: data,
            data: data,
            result: data.length,
          });
        },
        (error) => {
          console.log(error);
        }
      );
  }

  ///***SEARCH FUNCTION */
  updateSearch = (e) => {
    let adherantFiltred = this.state.data.filter((membre) => {
      for (let property in membre) {
        console.log(membre[property]);
        if (
          String(membre[property]).match(
            new RegExp("(.*" + e.target.value + ".*)", "i")
          ) &&
          property !== "_id"
        ) {
          return true;
        }
      }
      return false;
    });

    this.setState({
      search: e.target.value,
      adherantFiltred: adherantFiltred,
      result: adherantFiltred.length,
    });
  };
  afficherAdherent = () => {
    return this.state.adherantFiltred.map((element, index) => (
      <Col className="col-md-4 my-4">
        <div className="" key={index}>
          <div className="card profile-card-4" style={{ height: "700px" }}>
            <div className="card-img-block">
              {/* PHOTO COUVERTURE */}
              <img
                className="img-fluid"
                src={"http://localhost:8080/image/" + element.photoCouverture}
                alt="Banniere-photo"
              />
            </div>
            <div className="card-body pt-5">
              {/* PROFILE PHOTO */}
              <img
                src={"http://localhost:8080/image/" + element.photoPortrait}
                alt="Photo-portrait"
                class="profile"
              />

              {/* LOGO */}
              <div className="logoAnnuaire">
                <img
                  src={"http://localhost:8080/image/" + element.logo}
                  alt="logo"
                  className="logo"
                  style={{
                    height: "60px",

                  }}
                />
              </div>
              <h5 className="card-title text-center ">{element.nomSociete}</h5>

              <p className="card-text text-center">
                {this.limitText(element.descriptionActivite)} (...)
              </p>

              <hr className="hrCard" />
              <p className="titleCard"> Secteur d'activité</p>
              <p className="card-text text-center">{element.secteurActivite}</p>
              <hr className="hrCard" />
              <p className="titleCard">Dirigeant</p>
              <p className="card-text text-center">
                {element.nomDuRepresentant} {element.prenomDuRepresentant}
              </p>
            </div>
            <div
              style={{
                textAlign: "center",
                marginBottom: "20px",
              }}
            >
              <Link to={"/fiche/" + element._id}>
                <Button variant="btn-primary" className="buttonCard">
                  Voir le membre
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Col>
    ));
  };

  render() {
    return (
      <div>
        <Navbar />
        <div style={{ paddingTop: "80px" }}>
          <div className="headerAnnuaire">
            <h2 className="h2Annuaire">Annuaire des membres</h2>
            <hr className="hrAnnuaire" />
          </div>

          <Container className="containerAnnuaire">
            <input
              class="form-control mx-auto w-50 my-3"
              type="text"
              placeholder="Rehercher: un membre, une activité, un mot clé..."
              aria-label="Search"
              value={this.state.search}
              onChange={this.updateSearch}
              style={{
                backgroundImage: "url(/images/searchlogo.png)",
                backgroundPosition: "right",
                backgroundRepeat: "no-repeat",
              }}
            />
            {/* {this.redirect()} */}
            <p style={{ textAlign: "center" }}> {this.state.result} membres</p>
            <Row>{this.afficherAdherent()}</Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default Annuaire;
