import React, { Component } from "react";
import "./form.css";
import { Button } from "react-bootstrap";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mail: "",
      password: "",
      confirmPassword: "",
      nomSociete: "",
      adresseSociete: "",
      complementAdresse: "",
      codePostal: "",
      ville: "",
      tel: "",
      mailPro: "",
      urlSite: "",
      urlFb: "",
      urlInsta: "",
      urlLinkedIn: "",
      urlTwitter: "",
      secteurActivite: "",
      descriptionActivite: "",
      logo: "",
      photoCouverture: "",
      brochure: "",
      nomDuRepresentant: "",
      prenomDuRepresentant: "",
      fonctionDuRepresentant: "",
      citationCiu: "",
      photoPortrait: "",
      charte: false,
      rgpd: false,
      paiement: "",
      // role: "",
      // active: "",

      show: false,
      alertSweet: false,
    };
  }
  handelState = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handelCheckBox = (e) => {
    this.setState({ charte: !this.state.charte });
  };
  handelCheckBoxRgpd = (e) => {
    this.setState({ rgpd: !this.state.rgpd });
  };
  handelRadioButton = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  sendData = (e) => {
    e.preventDefault();
    const body = new FormData(e.target);
    if (this.state.password !== this.state.confirmPassword) {
      return alert("Vérifier votre mot de passe");
    }
    this.setState({
      mail: "",
      password: "",
      confirmPassword: "",
      nomSociete: "",
      adresseSociete: "",
      complementAdresse: "",
      codePostal: "",
      ville: "",
      tel: "",
      mailPro: "",
      urlSite: "",
      urlFb: "",
      urlInsta: "",
      urlLinkedIn: "",
      urlTwitter: "",
      secteurActivite: "",
      descriptionActivite: "",
      logo: "",
      photoCouverture: "",
      brochure: "",
      nomDuRepresentant: "",
      prenomDuRepresentant: "",
      fonctionDuRepresentant: "",
      citationCiu: "",
      photoPortrait: "",
      charte: false,
      rgpd: false,
      paiement: "",
    });

    const options = {
      method: "POST",
      mode: "cors",
      body: body,
    };
    fetch("http://localhost:8080/formulaire", options)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="containerFormulaire">
        <h2 id="titleForm">Formulaire d'inscription </h2>

        {/* <!-- MAil   --> */}

        <hr className="hrForm1" />
        <br />
        <br />
        <br />
        <form
          onSubmit={this.sendData}
          className="container-fluid"
          enctype="multipart/form-data"
        >
          <h3 style={{ textAlign: "center" }}> Identification </h3>
          <hr className="hrForm2" />
          <div className="form-row">
            <div className="form-group col-md-6">
              <label>Email</label>

              <input
                onChange={this.handelState}
                name="mail"
                type="email"
                className="form-control"
                value={this.state.mail}
                placeholder="Obligatoire"
                required
              />
            </div>
          </div>
          {/* <!-- MOT DE PASSE   --> */}
          <div className="form-row">
            <div className="form-group col-md-6">
              <label>Mot de passe</label>
              <input
                onChange={this.handelState}
                name="password"
                type="password"
                className="form-control"
                value={this.state.password}
                placeholder="Votre mot de passe"
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-md-6">
              <label>Confirmation de Mot de passe</label>
              <input
                onChange={this.handelState}
                name="confirmPassword"
                type="password"
                className="form-control"
                value={this.state.confirmPassword}
                placeholder="Confirmation de votre mot de passe"
                required
              />
            </div>
          </div>

          <br />
          <br />
          <h3 style={{ textAlign: "center" }}> Société </h3>
          <hr className="hrForm2" />
          {/* <!-- Nom societe  --> */}
          <div className="form-row">
            <div className="form-group col-md-6">
              <label>Nom de la société</label>
              <input
                onChange={this.handelState}
                name="nomSociete"
                type="text"
                className="form-control"
                value={this.state.nomSociete}
                required
              />
            </div>
          </div>
          {/* <!--        adresse societe  --> */}
          <div className="form-row">
            <div className="form-group col-md-6">
              <label>Adresse de la société</label>
              <input
                onChange={this.handelState}
                name="adresseSociete"
                type="text"
                className="form-control"
                value={this.state.adresseSociete}
                required
              />
            </div>
          </div>
          {/* <!--      complement ADRESSE       --> */}
          <div className="form-row">
            <div className="form-group col-md-6">
              <label>Complément d'adresse</label>
              <input
                onChange={this.handelState}
                name="complementAdresse"
                type="text"
                className="form-control"
                value={this.state.complementAdresse}
              />
            </div>
          </div>
          {/* <!-- Code postal --> */}
          <div className="form-row">
            <div className="form-group col-md-6">
              <label> Code postal </label>
              <input
                onChange={this.handelState}
                name="codePostal"
                type="number"
                className="form-control"
                value={this.state.codePostal}
                placeholder="Obligatoire"
                required
                maxLength="5"
              />
            </div>
          </div>
          {/* <!-- VILLE --> */}
          <div className="form-row">
            <div className="form-group col-md-6">
              <label> Ville </label>
              <input
                onChange={this.handelState}
                name="ville"
                type="text"
                className="form-control"
                value={this.state.ville}
                placeholder="Obligatoire"
                required
              />
            </div>
          </div>
          {/* <!-- telephone--> */}
          <div className="form-row">
            <div className="form-group col-md-6">
              <label> Teléphone </label>
              <input
                onChange={this.handelState}
                name="tel"
                type="number"
                className="form-control"
                value={this.state.tel}
                placeholder=""
                required
              />
            </div>
          </div>
          {/* <!-- Mail société--> */}
          <div className="form-row">
            <div className="form-group col-md-6">
              <label> Email société </label>
              <input
                onChange={this.handelState}
                name="mailPro"
                type="email"
                className="form-control"
                value={this.state.mailPro}
                required
              />
            </div>
          </div>
          {/* <!-- Site internet--> */}
          <div className="form-row">
            <div className="form-group col-md-6">
              <label> URL de votre site </label>
              <input
                onChange={this.handelState}
                name="urlSite"
                type="text"
                className="form-control"
                value={this.state.urlSite}
              />
            </div>
          </div>
          {/* <!-- Lien facebook--> */}
          <div className="form-row">
            <div className="form-group col-md-6">
              <label> Lien Facebook </label>
              <input
                onChange={this.handelState}
                name="urlFb"
                type="text"
                className="form-control"
                value={this.state.urlFb}
              />
            </div>
          </div>
          {/* <!-- Lien Insta--> */}
          <div className="form-row">
            <div className="form-group col-md-6">
              <label> Lien Instagram </label>
              <input
                onChange={this.handelState}
                name="urlInsta"
                type="text"
                className="form-control"
                value={this.state.urlInsta}
              />
            </div>
          </div>
          {/* <!-- Lien LinkedIn--> */}
          <div className="form-row">
            <div className="form-group col-md-6">
              <label> Lien LinkedIn </label>
              <input
                onChange={this.handelState}
                name="urlLinkedIn"
                type="text"
                className="form-control"
                value={this.state.urlLinkedIn}
              />
            </div>
          </div>
          {/* <!-- Lien Twitter--> */}
          <div className="form-row">
            <div className="form-group col-md-6">
              <label> Lien Twitter </label>
              <input
                onChange={this.handelState}
                name="urlTwitter"
                type="text"
                className="form-control"
                value={this.state.urlTwitter}
              />
            </div>
          </div>
          {/* <!-- Secteur d'activité --> */}
          <div className="form-row">
            <div className="form-group col-md-6">
              <label> Secteur d'activité </label>
              <input
                onChange={this.handelState}
                name="secteurActivite"
                type="text"
                className="form-control"
                value={this.state.secteurActivite}
                placeholder="Obligatoire"
                required
              />
            </div>
          </div>
          {/* <!-- Description activité --> */}
          <div className="form-row">
            <div className="form-group col-md-6">
              <label> Description d'activité </label>
              <textarea
                onChange={this.handelState}
                name="descriptionActivite"
                type="text"
                className="form-control"
                value={this.state.descriptionActivite}
                placeholder="Obligatoire"
                required
                maxLength="700"
                style={{ height: "150px" }}
              />
            </div>
          </div>
          {/* <!-- Logo  --> */}
          <div className="form-row">
            <div className="form-group col-md-6">
              <label> Téléchargez votre logo </label>
              <input
                onChange={this.handelState}
                name="logo"
                type="file"
                className="form-control"
                value={this.state.logo}
                required
                accept="image/*"
              />
            </div>
          </div>

          {/* <!-- photo de couverture  --> */}
          <div className="form-row">
            <div className="form-group col-md-6">
              <label> Téléchargez votre photo de couverture </label>
              <input
                onChange={this.handelState}
                name="photoCouverture"
                type="file"
                className="form-control"
                value={this.state.photoCouverture}
                required
                accept="image/*"
              />
            </div>
          </div>

          {/* <!--brochure  --> */}
          <div className="form-row">
            <div className="form-group col-md-6">
              <label> Téléchargez la brochure de votre entreprise </label>
              <input
                onChange={this.handelState}
                name="brochure"
                type="file"
                className="form-control"
                value={this.state.brochure}
                required
                accept=".pdf"
              />
            </div>
          </div>
          <br />
          <br />
          <h3 style={{ textAlign: "center" }}> Représentant </h3>
          <hr className="hrForm4" />

          {/* <!--Le nom du représentant  --> */}
          <div className="form-row">
            <div className="form-group col-md-6">
              <label> Le nom du représentant </label>
              <input
                onChange={this.handelState}
                name="nomDuRepresentant"
                type="text"
                className="form-control"
                value={this.state.nomDuRepresentant}
                placeholder="Obligatoire"
                required
              />
            </div>
          </div>
          {/* <!--Prénom du représentatnt  --> */}
          <div className="form-row">
            <div className="form-group col-md-6">
              <label> Le prénom du représentant </label>
              <input
                onChange={this.handelState}
                name="prenomDuRepresentant"
                type="text"
                className="form-control"
                value={this.state.prenomDuRepresentant}
                placeholder="Obligatoire"
                required
              />
            </div>
          </div>
          {/* <!--Fonction du représentatnt  --> */}
          <div className="form-row">
            <div className="form-group col-md-6">
              <label> Fonction du représentant </label>
              <input
                onChange={this.handelState}
                name="fonctionDuRepresentant"
                type="text"
                className="form-control"
                value={this.state.fonctionDuRepresentant}
                placeholder="(CEO, fondateur, responsable, etc...) 'Obligatoire'"
                required
              />
            </div>
          </div>
          {/* <!--citation sur CIU --> */}
          <div className="form-row">
            <div className="form-group col-md-6">
              <label> Citation Ciu </label>
              <textarea
                onChange={this.handelState}
                name="citationCiu"
                type="text"
                className="form-control"
                value={this.state.citationCiu}
                placeholder="Optionnelle"
              />
            </div>
          </div>
          {/* <!--Photo portrait --> */}
          <div className="form-row">
            <div className="form-group col-md-6">
              <label> Photo portrait </label>
              <input
                onChange={this.handelState}
                name="photoPortrait"
                type="file"
                className="form-control"
                value={this.state.photoPortrait}
                placeholder="Obligatoire"
                required
              />
            </div>
          </div>
          <br />
          <br />
          <h3 style={{ textAlign: "center" }}> Conditions </h3>
          <hr className="hrForm5" />

          {/* <!--Charte  --> */}
          <div className="form-row">
            <div className="form-group col-md-6 ">
              <input
                onChange={this.handelCheckBox}
                name="charte"
                type="checkbox"
                style={{ marginRight: "20px" }}
                // className="form-control"
                value={this.state.charte}
                checked={this.state.charte}
                required
              />
              <label>Charte Cannes Is Up </label>
              <a href="#" className="mx-3 sm">
                {" "}
                <small>Consultez la charte </small>{" "}
              </a>
            </div>
          </div>
          {/* <!--rgpd  --> */}
          <div className="form-row">
            <div className="form-group col-md-6">
              <input
                onChange={this.handelCheckBoxRgpd}
                name="rgpd"
                type="checkbox"
                style={{ marginRight: "20px" }}
                // className="form-control"
                value={this.state.rgpd}
                checked={this.state.rgpd}
                required
              />
              <label> En cochant, j’accepte les conditions de RGPD </label>
            </div>
          </div>
          <br />
          <br />
          <h3 style={{ textAlign: "center" }}>Mode de paiement</h3>
          <hr className="hrForm6" />

          {/* <!--Checkbox paiement CB  --> */}
          <div className="form-row">
            <div className="form-group col-md-6">
              <input
                type="radio"
                name="paiement"
                value="carte bancaire"
                style={{ marginRight: "20px" }}
                // className="form-control"
                checked={this.state.paiement === "carte bancaire"}
                onChange={this.handelRadioButton}
              />
              <label> Carte </label>
              <br />

              <input
                type="radio"
                name="paiement"
                value="virement"
                style={{ marginRight: "20px" }}
                // className="form-control"
                checked={this.state.paiement === "virement"}
                onChange={this.handelRadioButton}
              />
              <label> Virement</label>
            </div>
          </div>

          {/* <!-- Valider --> */}
          <div className="bouttons">
            <Button
              type="submit"
              variant="btn-primary"
              className="buttonForm"
              id="valider"
            >
              Valider
            </Button>
            <br />
            <br />
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
