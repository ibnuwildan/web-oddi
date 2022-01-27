import React, { Component } from "react";
import { MDBGallery, MDBGalleryList, MDBCol, MDBView, MDBRow, MDBCardImage } from "mdbreact";

class Gallery extends Component {
  render() {
    return (
      <div class="scrollspy-example  mt-4">
        <h1 className="title text-center" style={{ fontSize: 30, paddingTop: 30, paddingBottom: 20 }}>
          MEREKA YANG SUDAH CUSTOM BERSAMA ODDI
        </h1>
        <MDBRow style={{ textAlign: "center" }}>
          <MDBCol md="3">
            <div class="view overlay zoom">
              <img src={require("../img/card/card1.jpeg")} width="500  " height="400" class="img-fluid " alt="zoom" />
            </div>
          </MDBCol>
          <MDBCol md="3">
            <div class="view overlay zoom">
              <img src={require("../img/card/card7.JPG")} width="500  " height="400" class="img-fluid " alt="zoom" />
            </div>
          </MDBCol>
          <MDBCol md="3">
            <div class="view overlay zoom">
              <img src={require("../img/card/card8.jpeg")} width="500  " height="400" class="img-fluid " alt="zoom" />
            </div>
          </MDBCol>
          <MDBCol md="3">
            <div class="view overlay zoom">
              <img src={require("../img/card/card11.jpeg")} width="500  " height="400" class="img-fluid " alt="zoom" />
            </div>
          </MDBCol>
          <MDBCol md="3">
            <div class="view overlay zoom">
              <img src={require("../img/card/card12.jpeg")} width="500  " height="400" class="img-fluid " alt="zoom" />
            </div>
          </MDBCol>
          <MDBCol md="3">
            <div class="view overlay zoom">
              <img src={require("../img/card/card13.jpeg")} width="500  " height="400" class="img-fluid " alt="zoom" />
            </div>
          </MDBCol>
          <MDBCol md="3">
            <div class="view overlay zoom">
              <img src={require("../img/card/card14.jpeg")} width="500  " height="400" class="img-fluid " alt="zoom" />
            </div>
          </MDBCol>
          <MDBCol md="3">
            <div class="view overlay zoom">
              <img src={require("../img/card/card15.jpeg")} width="500  " height="400" class="img-fluid " alt="zoom" />
            </div>
          </MDBCol>
          <MDBCol md="3">
            <div class="view overlay zoom">
              <img src={require("../img/card/card16.jpeg")} width="500  " height="400" class="img-fluid " alt="zoom" />
            </div>
          </MDBCol>
          <MDBCol md="3">
            <div class="view overlay zoom">
              <img src={require("../img/card/card17.jpeg")} width="500  " height="400" class="img-fluid " alt="zoom" />
            </div>
          </MDBCol>
          <MDBCol md="3">
            <div class="view overlay zoom">
              <img src={require("../img/card/card18.jpeg")} width="500  " height="400" class="img-fluid " alt="zoom" />
            </div>
          </MDBCol>
          <MDBCol md="3">
            <div class="view overlay zoom">
              <img src={require("../img/card/card19.jpeg")} width="500  " height="400" class="img-fluid " alt="zoom" />
            </div>
          </MDBCol>
          <MDBCol md="3">
            <div class="view overlay zoom">
              <img src={require("../img/card/card20.jpeg")} width="500  " height="400" class="img-fluid " alt="zoom" />
            </div>
          </MDBCol>
          <MDBCol md="3">
            <div class="view overlay zoom">
              <img src={require("../img/card/card21.jpeg")} width="500  " height="400" class="img-fluid " alt="zoom" />
            </div>
          </MDBCol>
          <MDBCol md="3">
            <div class="view overlay zoom">
              <img src={require("../img/card/card22.jpeg")} width="500  " height="400" class="img-fluid " alt="zoom" />
            </div>
          </MDBCol>
          <MDBCol md="3">
            <div class="view overlay zoom">
              <img src={require("../img/card/card23.jpeg")} width="500  " height="400" class="img-fluid " alt="zoom" />
            </div>
          </MDBCol>
        </MDBRow>
      </div>
    );
  }
}

export default Gallery;
