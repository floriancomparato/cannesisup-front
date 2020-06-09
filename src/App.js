import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import Navbar from "./components/navbar/Navbar";
import Form from "./components/form/Form";
import Annuaire from "./components/annuaire/Annuaire";
import Login from "./components/login/Login";
import Fiche from "./components/fiche/Fiche";
import Footer from "./components/footer/Footer";
import Membre from "./components/membre/Membre";
import Admin from "./components/admin/Admin";
import Search from "./components/annuaire/searchbar/Searchbar";
import Navbar from './components/navbar/Navbar';
import LoginAdmin from './components/admin/LoginAdmin'
class App extends Component {
  render() {
    return (
      <Router>
        <div className="Navbar">
          {" "}
          <Navbar collapseOnSelect expand="lg" fixed="top" />
        </div>

        <Switch>
          <Route path="/annuaire">
            <Annuaire />
          </Route>
          <Route path="/formulaire">
            <Form />
          </Route>
          <Route path="/fiche/:id" component={Fiche} />

          <Route path="/login">
            <Login />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/loginadmin" component={LoginAdmin} />
          <Route path="/membre" component={Membre} />

          <Route path="/search">
            <Search />
          </Route>
          <Route path="/">
            <Navbar />
          </Route>
        </Switch>
        <footer>
          <Footer />
        </footer>
      </Router>
    );
  }
}
export default App;
