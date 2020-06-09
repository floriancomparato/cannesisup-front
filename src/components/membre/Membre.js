import React, { Component } from "react";
import { Button } from "react-bootstrap";
import "../form/form.css";
import { Redirect } from "react-router-dom";

class Membre extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      navigate: false,
      modif: false,
    };
  }
  componentDidMount() {
    /* Options, paramètres de la requête + localstorage */
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");

    const body = { userId: userId };

    //to do : condition verifiant l'existance de token et userid et redirection vers login si n'existe pas

    const options = {
      method: "POST",
      headers: {
        Authorization: "bearer " + token,
        "Content-Type": "application/json",
      },
      mode: "cors",
      // body: body, ca fonctionne quand c'est commenté
    };

    fetch("http://localhost:8080/membre", options)
      .then((response) => response.json())
      .then(
        (data) => {
          this.setState({
            mail: data.mail,
            password: data.password,
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
            // logo: data.logo,
            // photoCouverture: data.photoCouverture,
            // brochure: data.brochure,
            nomDuRepresentant: data.nomDuRepresentant,
            prenomDuRepresentant: data.prenomDuRepresentant,
            fonctionDuRepresentant: data.fonctionDuRepresentant,
            citationCiu: data.citationCiu,
            // photoPortrait: data.photoPortrait,
          });
        },
        (error) => {
          console.log(error);
        }
      );
  }
 /// //**** Aficher Adherants */
 
 modifierAdherant = (e) => {
  e.preventDefault();
  const body = new FormData(e.target);
  this.setState({
    mail: "",
    password: "",
    confirmPassword: '',
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
    method: "PUT",
    mode: "cors",
    body: body,
  };
  // const id = this.props.match.params.id;
  fetch("http://localhost:8080/formulaire/modify", options)
    .then((response) => response.json())
    .then(
      (data) => {
        console.log(data)
      }
    )
    .catch(
      (error) => {
        console.log(error);
      }
    )

};


  valeursInfos = (e) => {
    console.log(e);
    const data = this.state.data;
    data[e.target.name] = e.target.value;
    this.setState({ data: data });
  };

  handelState = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  // fetch put update one

  logout = () => {
    localStorage.clear("token");
    this.setState({ navigate: true });
  };
//*******Redirection  */
  redirect = () => {
    if (this.state.navigate) {
      return <Redirect to="/login" push={true} />;
    }
  };

 
  afficherAdherent = () => {
    return (
      <div className="containerFormulaire">
        <div className="boutonMembre">
          {this.redirect()}
          <Button
            onClick={this.logout}
            // type="submit"
            variant="btn-primary"
            className="buttonForm"
          // id="valider"
          >
            Deconnexion
          </Button>
        </div>

        <form 
        className="container-fluid col-md-10"
        onSubmit={this.modifierAdherant}
        >
          <h2 id="titleForm">Espace personnel </h2>

          {/* <!-- MAil   --> */}

          <hr className="hrForm1" />
          <br />
          <br />
          <br />
          <h3 style={{ textAlign: "center" }}> Identification </h3>
          <hr className="hrForm2" />
          <div className="form-row">
            <div className="form-group col-md-6">
              <label>Email</label>
              <input
                name="mail"
                type="email"
                className="form-control"
                value={this.state.mail}
                placeholder="Obligatoire"
              // required
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
                placeholder="Votre mot de passe"
                value={this.state.password}
              />
            </div>
          </div>

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
              // required
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
              // required
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
                // required
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
              // required
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
                placeholder="06.."
              // required
              />
            </div>
          </div>
          {/* <!-- Mail société--> */}
          <div className="form-row">
            <div className="form-group col-md-6">
              <label> Email professionnel </label>
              <input
                onChange={this.handelState}
                name="mailPro"
                type="email"
                className="form-control"
                value={this.state.mailPro}
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
                type="url"
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
                type="url"
                className="form-control"
                value={this.state.urlFb}
              />
            </div>
          </div>
          {/* <!-- Lien Insta--> */}
          <div className="form-row">
            <div className="form-group col-md-6">
              <label> Lien Insta </label>
              <input
                onChange={this.handelState}
                name="urlInsta"
                type="url"
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
                type="url"
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
                type="url"
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
              // required
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
                // required
                maxLength="500"
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
                // required
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
                // required
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
                // required
                accept=".pdf"
              />
            </div>
          </div>
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
              // required
              />
            </div>
          </div>
          {/* <!--Prénom du représentatnt  --> */}
          <div className="form-row">
            <div className="form-group col-md-6">
              <label> Le prénom du représentatnt </label>
              <input
                onChange={this.handelState}
                name="prenomDuRepresentant"
                type="text"
                className="form-control"
                value={this.state.prenomDuRepresentant}
                placeholder="Obligatoire"
              // required
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
                placeholder="(CEO, fondateur, responssable, etc...) 'Obligatoire'"
              // required
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
              />
            </div>
          </div>
          <br />

          {/* <!-- Valider --> */}
          <div className="bouttons ">
            <Button
              // onClick={this.modiferAdherant}
              type="submit"
              variant="btn-primary"
              className="buttonForm mx-5"
              id="valider"
            >
              Valider
            </Button>
            {/* <Button
              // onClick=
              type="submit"
              variant="btn-primary"
              className="buttonForm"
              id="valider"
            >
              Modifier
            </Button> */}
            <br />
            <br />
          </div>
        </form>
      </div>
    );
  };

  render() {
    return <div> {this.afficherAdherent()} </div>;
  }
}

export default Membre;
