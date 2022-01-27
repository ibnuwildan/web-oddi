import React, { Component } from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink,MDBIcon, MDBCardImage } from "mdbreact";

class Navbar extends Component {
   
    render() {
        return (
      <MDBNavbar className="font-weight-bold teal accent-2" light expand="lg">
          <MDBNavLink className="waves-effect waves-light" to="/">
          <MDBCardImage src={require('../img/logo4.png')} style={{height: '50px',paddingRight:'30px',paddingLeft:'10px'}}/>
          </MDBNavLink>
          <MDBNavbarNav left>
            <MDBNavItem >
              <MDBNavLink to="/">Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/album">Gallery</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/about">About</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
            </MDBNavItem>
          </MDBNavbarNav>
      </MDBNavbar>
        )
    }
}

export default Navbar;