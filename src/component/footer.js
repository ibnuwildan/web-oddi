import React, { Component } from 'react';
import { MDBIcon,MDBCol, MDBContainer, MDBRow, MDBFooter, MDBCardImage } from "mdbreact";

class Footer extends Component {
  render() {
    return (
      <div>
        <MDBFooter color="teal darken-3" className="font-large  pt-4 mt-4 ">
        <MDBContainer>
          <MDBContainer fluid className="text-center text-md-left">
            <MDBRow>
              <MDBCol md="4">
                <h5 className="title font-weight-bold" style={{fontSize: 30}}>Support</h5>
                <ul className="col-md-10 py-2">
                  <MDBRow>
                  <MDBCol md='4'>
                 <MDBCardImage src={require('../img/suport/oddi.jpeg')} style={{width: 65, height: 60}}></MDBCardImage>
                  </MDBCol>
                  <MDBCol md='4'>
                 <MDBCardImage src={require('../img/suport/blackdeker.png')} style={{width: 65}}></MDBCardImage>
                  </MDBCol>
                  <MDBCol md='4'>
                 <MDBCardImage src={require('../img/suport/matsui.jpg')} style={{width: 70}}></MDBCardImage>
                  </MDBCol>
                  <MDBCol md='4'>
                 <MDBCardImage src={require('../img//suport/unita.png')} style={{width: 65}}></MDBCardImage>
                  </MDBCol>
                  <MDBCol md='4'>
                 <MDBCardImage src={require('../img//suport/bremol.jpg')} style={{width: 70, paddingTop: 20}}></MDBCardImage>
                  </MDBCol>
                  </MDBRow>
                 
                 </ul>
              </MDBCol>
              <MDBCol md="4">
                <h5 className="title font-weight-bold" style={{fontSize: 30}}>Informasi</h5>
                <a href='/detail'>
                  detail custom pakaian
            </a>
              </MDBCol>
              <MDBCol md="4">
                <h5 className="title font-weight-bold md" style={{fontSize: 30}}>Kontak</h5>
              <p className="text-xl-left" > Kp.sawah desa.Lengkong Kecamatan.Pagedangan,kab.Tangerang Banten.
                082112809453</p>
                 <ul className="col-md-10 py-2">
                 <a href="https://www.instagram.com/oddidesign_"><MDBIcon className="fa-lg white-text mr-md-5 list-unstyled" fab icon="instagram" size="2x"/></a>
                 <a href="#!"><MDBIcon className="fa-lg red-text mr-md-5" fab icon="google-plus-g"  size="2x" /></a>
                 <a href="https://www.facebook.com/ibnu.wildan.3110/"><MDBIcon className="fa-lg blue-text mr-md-5" fab icon="facebook-f" size="2x"/> </a>
                 </ul>

              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBContainer>
          <div className="footer-copyright text-center py-3">
            <MDBContainer fluid>
              &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> MDBootstrap.com </a>
            </MDBContainer>
          </div>
        </MDBFooter>
      </div>
    )
  }
}

export default Footer;