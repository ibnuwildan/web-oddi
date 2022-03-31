import React, { Component } from "react";
import { MDBCardImage, MDBCardText, MDBCol, MDBIcon, MDBRow } from "mdbreact";
import Carousel from "../component/carousel";
import Card from "../component/card";
import Gallery from "../component/gallery";
// import axios from 'axios';

class Home extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "GhostWhite" }}>
        <MDBCardImage src={require("../img/stikeroddi.png")} style={{ maxWidth: "100%", height: "auto" }} />
        <div style={{ margin: "auto", backgroundColor: "GhostWhite", paddingBottom: "10px" }}>
          <h1 className="title text-center" style={{ fontSize: 30, paddingTop: 30 }}>
            CUSTOM PAKAIAN SESUAI IMPIANMU
          </h1>
          <div className="d-flex justify-content-around m-5">
            <div style={{ maxWidth: "30%" }}>
              <MDBCol className="title text-center">
                <MDBIcon icon="pencil-alt" style={{ fontSize: "500%" }} />
                <p style={{ paddingTop: "20px" }}>DESAIN SESUAI KEINGINANMU</p>
              </MDBCol>
            </div>
            <div style={{ maxWidth: "30%" }}>
              <MDBCol className="title text-center">
                <MDBIcon icon="wrench" style={{ fontSize: "500%" }} />
                <p style={{ paddingTop: "20px" }}>JAMINAN KUALITAS PRODUK</p>
              </MDBCol>
            </div>
            <div style={{ maxWidth: "30%" }}>
              <MDBCol className="title text-center">
                <MDBIcon icon="clock" style={{ fontSize: "500%" }} />
                <p style={{ paddingTop: "20px" }}>JAMINAN PENGERJAAN TEPAT WAKTU</p>
              </MDBCol>
            </div>
            <div style={{ maxWidth: "30%" }}>
              <MDBCol className="title text-center">
                <MDBIcon icon="paper-plane" style={{ fontSize: "500%" }} />
                <p style={{ paddingTop: "20px" }}>JAMINAN PENGIRIMAN TEPAT WAKTU</p>
              </MDBCol>
            </div>
            <div style={{ maxWidth: "30%" }}>
              <MDBCol className="title text-center">
                <MDBIcon icon="money-bill-alt" style={{ fontSize: "500%" }} />
                <p style={{ paddingTop: "20px" }}>JAMINAN UANG KEMBALI</p>
              </MDBCol>
            </div>
          </div>
        </div>
        {/* <MDBRow>
          <MDBCol md="6">
            <Carousel></Carousel>
          </MDBCol>
          <MDBCol md="6">
            <Carousel></Carousel>
          </MDBCol>
        </MDBRow> */}
        <Gallery></Gallery>
        <Card></Card>
      </div>
    );
  }
}

export default Home;
