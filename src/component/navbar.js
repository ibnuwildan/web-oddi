import React, { Component } from "react";
import Axios from "axios";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBIcon,
  MDBCardImage,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
  MDBRow,
  MDBCol,
  MDBInput,
} from "mdbreact";

class Navbar extends Component {
  state = {
    modalLogin: false,
    modalRegister: false,
  };

  toggleLogin = () => {
    this.setState({
      modalLogin: !this.state.modalLogin,
    });
  };

  toggleRegister = () => {
    this.setState({
      modalRegister: !this.state.modalRegister,
    });
  };

  onBtnLogIn = () => {
    let username = this.text.value;
    let password = this.password.value;
    console.log(username);
    console.log(password);
  };

  onBtnRegister = () => {
    let username = this.text.value;
    let email = this.email.value;
    let password = this.password.value;
    let confpassword = this.confpassword.value;
    console.log(username);
    console.log(email);
    console.log(password);
    console.log(confpassword);
    if (username && email && password && confpassword) {
      if (password !== confpassword) {
        alert("Invalid Password Confirmation");
      } else {
        Axios.post("http://localhost:3000/user", {
          username: username,
          password: password,
          email: email,
        })
          .then((res) => {
            console.log("Regis Success" + res.data);
            alert("suksesssss");
            this.toggleRegister();
          })
          .catch((err) => {
            console.log(err);
          });
      }
    } else {
      alert("mohon isi data dengan lengkap");
    }
  };
  render() {
    return (
      <MDBNavbar className="font-weight-bold teal accent-2" light expand="lg">
        <MDBNavLink className="waves-effect waves-light" to="/">
          <MDBCardImage src={require("../img/logo4.png")} style={{ height: "50px", paddingRight: "30px", paddingLeft: "10px" }} />
        </MDBNavLink>
        <MDBNavbarNav>
          <MDBNavItem>
            <MDBNavLink to="/">Home</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="/album">Gallery</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="/about">About</MDBNavLink>
          </MDBNavItem>
          <MDBNavItem></MDBNavItem>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <MDBIcon style={{ paddingRight: "10px" }} icon="user" />
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default">
                  <MDBDropdownItem href="#!" onClick={this.toggleLogin}>
                    Login
                  </MDBDropdownItem>
                  <MDBDropdownItem href="#!" onClick={this.toggleRegister}>
                    Registration
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
              <MDBContainer>
                <MDBModal isOpen={this.state.modalLogin} toggle={this.toggleLogin}>
                  <MDBModalHeader toggle={this.toggleLogin}>Login</MDBModalHeader>
                  <MDBModalBody>
                    <MDBRow>
                      <MDBCol md="12">
                        <form>
                          <div className="grey-text">
                            <MDBInput label="Type your user" group type="text" inputRef={(text) => (this.text = text)} />
                            <MDBInput label="Type your password" group type="password" inputRef={(password) => (this.password = password)} />
                          </div>
                          <div className="text-center">
                            <MDBBtn onClick={this.onBtnLogIn}>Login</MDBBtn>
                          </div>
                        </form>
                      </MDBCol>
                    </MDBRow>
                  </MDBModalBody>
                </MDBModal>
              </MDBContainer>
              <MDBContainer>
                <MDBModal isOpen={this.state.modalRegister} toggle={this.modalRegister}>
                  <MDBModalHeader toggle={this.toggleRegister}>Registration</MDBModalHeader>
                  <MDBModalBody>
                    <MDBRow>
                      <MDBCol md="12">
                        <form>
                          <div className="grey-text">
                            <MDBInput label="Type your name" group type="text" inputRef={(text) => (this.text = text)} />
                            <MDBInput label="Type your email" group type="text" inputRef={(email) => (this.email = email)} />
                            <MDBInput label="Type your password" group type="password" inputRef={(password) => (this.password = password)} />
                            <MDBInput label="Type your same password" group type="password" inputRef={(confpassword) => (this.confpassword = confpassword)} />
                          </div>
                          <div className="text-center">
                            <MDBBtn onClick={this.onBtnRegister}>Registration</MDBBtn>
                          </div>
                        </form>
                      </MDBCol>
                    </MDBRow>
                  </MDBModalBody>
                </MDBModal>
              </MDBContainer>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBNavbarNav>
      </MDBNavbar>
    );
  }
}

export default Navbar;
