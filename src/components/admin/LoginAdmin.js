import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Redirect } from "react-router-dom";
import "./loginAdmin.css";

class LoginAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mail: "",
      password: "",
      redirect: false,
      success: false,
    };
  }

  //capture de la valeur des inputs
  handelState = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  redirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/admin" />;
    } else {
      return;
    }
  };

  loginConnect = (e) => {
    e.preventDefault();
    /* Options, paramètres de la requête */
    const body = {
      mail: this.state.mail,
      password: this.state.password,
    };
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      mode: "cors",
      body: JSON.stringify(body),
    };

    fetch("http://localhost:8080/user/login", options)
      .then((response) => response.json())
      .then(
        (res) => {
          res.error
            ? this.setState({ redirect: false, success: false })
            : this.setState({ redirect: true, success: true });
          localStorage.setItem("token", res.token);
          localStorage.setItem("userId", res.userId);
          console.log(res);
        },

        (error) => {
          console.log(error);
        }
      );
  };

  render() {
    return (
      <div className="containerLogin">
        {this.redirect()}
        <div className="headerLogin">
          <h2 className="h2Login">Accès au compte administrateur</h2>
          <hr className="hrLogin" />
        </div>
        <div className="col-md-5">
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Votre identifiant admin </Form.Label>
              <Form.Control
                className="inputLogin"
                type="mail"
                placeholder="Email"
                name="mail"
                value={this.state.mail}
                onChange={this.handelState}
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Votre mot de passe admin</Form.Label>
              <Form.Control
                className="inputLogin"
                type="password"
                placeholder="Mot de passe"
                name="password"
                value={this.state.password}
                onChange={this.handelState}
              />
              <a href="#" target="_blank" className="mdpOublie">
                <Form.Text className="text-muted">
                  Mot de passe oublié
                </Form.Text>
              </a>
            </Form.Group>

            <Button
              variant="btn-primary"
              // className="buttonLogin"
              className="buttonLogin1"
              type="submit"
              onClick={this.loginConnect}
            >
              {/* <Redirect to={this.state.redirect}/> */}
              Connexion
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default LoginAdmin;
