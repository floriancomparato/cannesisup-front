import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, Col, Row, Table, Button } from "react-bootstrap";

import { enableRipple } from "@syncfusion/ej2-base";
import { SwitchComponent } from "@syncfusion/ej2-react-buttons";

import { FaCrown } from "react-icons/fa";
import { Redirect } from "react-router-dom";

enableRipple(true);

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      navigate: false,
      // visibility: false,
    };
  }

  logout = () => {
    // localStorage.clear("token");
    this.setState({ navigate: true });
  };

  redirect = () => {
    if (this.state.navigate) {
      return <Redirect to="/loginadmin" push={true} />;
    }
  };

  componentDidMount() {
    fetch("http://localhost:8080/annuaire", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      mode: "cors",
    })
      .then((response) => response.json())
      .then(
        (data) => this.setState({ data }),
        (error) => console.log(error)
      );
  }

  buttonModif = () => {
    fetch("http://localhost:8080/admin/modification", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      mode: "cors",
    })
      .then((response) => response.json())
      .then(
        (data) => this.setState({ data: data }),
        (error) => console.log(error)
      );
  };

  buttonSuppr = (e, id) => {
    //body de la requete
    const body = {
      id: id,
    };

    //fetch
    fetch("http://localhost:8080/admin/suppression", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      mode: "cors",
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then(
        (data) => this.setState({ data }),
        (error) => console.log(error)
      );
  };

  refreshPage = () => {
    window.location.reload(false);
  };

  //Liaison  base de donnée

  render() {
    console.log(this.state.data);
    const userList = this.state.data.filter((user) => user._id);
    console.log(userList);

    const UserA = (props) => {
      const user = props.user;

      return (
        /*Informations à afficher par ligne */
        <tr key={user.nomSociete}>
          <td className="center-column">{user.nomSociete}</td>

          <td className="center-column">{user.nomDuRepresentant}</td>
          <td className="center-column">{user.prenomDuRepresentant}</td>
          <td className="center-column">{user.ville}</td>
          <td className="center-column">{user.mailPro}</td>
          <td className="center-column">{user.tel}</td>
          <td className="center-column">
            <SwitchComponent checked={true} /> Actif
            {/* <SwitchComponent name="visibility" 
              checked={user.visibility} 
              onChange={(e) => this.toggleVisibility(e, user._id)} 
            /> */}
          </td>

          <td className="center-column">{user.paiement}</td>

          <td className="center-column">{user.date}</td>
          <td className="center-column">
            <Button onClick={this.buttonModif} variant="secondary">
              Modifier
            </Button>{" "}
            <Button
              onClick={(e) => {
                this.buttonSuppr(e, user._id);
                this.refreshPage();
              }}
              variant="danger"
            >
              Supprimer
            </Button>{" "}
          </td>
        </tr>
      );
    };

    return (
      <div className="dashboard" style={{ paddingTop: "100px" }}>
        <div className="boutonAdmin">
          {this.redirect()}

          <Button
            onClick={this.logout}
            // type="submit"
            variant="btn-primary"
            className="buttonAdmin"
          // id="valider"
          >
            Deconnexion
          </Button>
        </div>
        <Row>
          <Col xl={12}>
            <Card>
              <Card.Header>
                <FaCrown size={60} style={{ color: "#F7316B" }} />
                ESPACE ADMINISTRATEUR
              </Card.Header>
              <Table striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th className="text-center" scope="col">
                      Nom société
                    </th>
                    <th className="text-center" scope="col">
                      Nom représentant
                    </th>
                    <th className="text-center" scope="col">
                      Prénom représentant
                    </th>
                    <th className="text-center" scope="col">
                      Ville
                    </th>
                    <th className="text-center" scope="col">
                      Email
                    </th>
                    <th className="text-center" scope="col">
                      Téléphone
                    </th>
                    <th className="text-center" scope="col">
                      Status
                    </th>
                    <th className="text-center" scope="col">
                      Paiement
                    </th>

                    <th className="text-center" scope="col">
                      Date d'enregistrement
                    </th>
                    <th className="text-center" scope="col">
                      Modifications
                    </th>
                  </tr>
                </thead>
                <tbody className="align-items-center">
                  {userList.map((user, index) => (
                    <UserA key={index} user={user} />
                  ))}
                </tbody>
              </Table>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Admin;
