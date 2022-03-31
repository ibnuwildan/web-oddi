import React, { Component } from "react";
import { MDBRow, MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer } from "mdbreact";
// import { Container } from 'reactstrap';

class Card extends Component {
  render() {
    return (
      <div class="mt-1" style={{ paddingTop: 10 }}>
        <h3 className="title text-center" style={{ fontSize: 25, paddingBottom: 10, paddingTop: 10 }}>
          KATA MEREKA YANG SUDAH CUSTOM BERSAMA ODDI
        </h3>
        {/* <MDBContainer> */}
        <MDBCarousel activeItem={1} length={3} showControls={true} showIndicators={false} className="z-depth-1" slide>
          <MDBCarouselInner>
            <MDBCarouselItem itemId="1">
              <MDBView>
                <MDBRow>
                  <MDBCol md="3">
                    <MDBCard>
                      <MDBCardImage className="img-fluid" src={require("../img/card/card2.jpeg")} waves />
                      <MDBCardBody>
                        <MDBCardTitle>@0ckhie_oktavian</MDBCardTitle>
                        <MDBCardText> "Di oddi itu ukuran bukan masalah, karena bisa custom ukuran. Saya gak harus diet :)"</MDBCardText>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>

                  <MDBCol md="3">
                    <MDBCard>
                      <MDBCardImage className="img-fluid" src={require("../img/card/card3.jpeg")} waves />
                      <MDBCardBody>
                        <MDBCardTitle>@ibnu_wildan</MDBCardTitle>
                        <MDBCardText>" Menurut gua produk oddi keren abis, nyaman dipakai dan hits abis"</MDBCardText>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>

                  <MDBCol md="3">
                    <MDBCard>
                      <MDBCardImage className="img-fluid" src={require("../img/card/7.jpeg")} waves />
                      <MDBCardBody>
                        <MDBCardTitle>@oddadrendy</MDBCardTitle>
                        <MDBCardText>" Thanks oddi karena custommu aku bebas melakukan apa aja kualitas terbaik"</MDBCardText>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>

                  <MDBCol md="3">
                    <MDBCard>
                      <MDBCardImage className="img-fluid" src={require("../img/card/5.jpeg")} waves />
                      <MDBCardBody>
                        <MDBCardTitle>@didik</MDBCardTitle>
                        <MDBCardText>Some quick example text to build on the card title and make up the bulk of the card's content.</MDBCardText>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                </MDBRow>
                <MDBMask />
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="2">
              <MDBView>
                <MDBRow>
                  <MDBCol md="3">
                    <MDBCard>
                      <MDBCardImage className="img-fluid" src={require("../img/card/8.jpeg")} waves />
                      <MDBCardBody>
                        <MDBCardTitle>iqbalol_</MDBCardTitle>
                        <MDBCardText>"Fast respon CS & informasi yg diberikan jelas. Bisa mix n match sesuai dgn style"</MDBCardText>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>

                  <MDBCol md="3">
                    <MDBCard>
                      <MDBCardImage className="img-fluid" src={require("../img/card/9.jpeg")} waves />
                      <MDBCardBody>
                        <MDBCardTitle>iful.saaf</MDBCardTitle>
                        <MDBCardText>" Bahan sangat berkualitas cocok sama yg aktif. Membuat saya tambah pede!"</MDBCardText>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>

                  <MDBCol md="3">
                    <MDBCard>
                      <MDBCardImage className="img-fluid" src={require("../img/card/9.jpeg")} waves />
                      <MDBCardBody>
                        <MDBCardTitle>iful.saaf</MDBCardTitle>
                        <MDBCardText>" Bahan sangat berkualitas cocok sama yg aktif. Membuat saya tambah pede!"</MDBCardText>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>

                  <MDBCol md="3">
                    <MDBCard>
                      <MDBCardImage className="img-fluid" src={require("../img/card/9.jpeg")} waves />
                      <MDBCardBody>
                        <MDBCardTitle>iful.saaf</MDBCardTitle>
                        <MDBCardText>" Bahan sangat berkualitas cocok sama yg aktif. Membuat saya tambah pede!"</MDBCardText>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                </MDBRow>
                <MDBMask />
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="3">
              <MDBView>
                <MDBRow>
                  <MDBCol md="3">
                    <MDBCard>
                      <MDBCardImage className="img-fluid" src={require("../img/card/10.jpeg")} waves />
                      <MDBCardBody>
                        <MDBCardTitle>@indaahkumala</MDBCardTitle>
                        <MDBCardText>" Menurut gua produk oddi keren abis, nyaman dipakai dan hits abis"</MDBCardText>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>

                  <MDBCol md="3">
                    <MDBCard>
                      <MDBCardImage className="img-fluid" src={require("../img/card/card3.jpeg")} waves />
                      <MDBCardBody>
                        <MDBCardTitle>@ibnu_wildan</MDBCardTitle>
                        <MDBCardText>" Menurut gua produk oddi keren abis, nyaman dipakai dan hits abis"</MDBCardText>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>

                  <MDBCol md="3">
                    <MDBCard>
                      <MDBCardImage className="img-fluid" src={require("../img/card/card3.jpeg")} waves />
                      <MDBCardBody>
                        <MDBCardTitle>@ibnu_wildan</MDBCardTitle>
                        <MDBCardText>" Menurut gua produk oddi keren abis, nyaman dipakai dan hits abis"</MDBCardText>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>

                  <MDBCol md="3">
                    <MDBCard>
                      <MDBCardImage className="img-fluid" src={require("../img/card/card3.jpeg")} waves />
                      <MDBCardBody>
                        <MDBCardTitle>@ibnu_wildan</MDBCardTitle>
                        <MDBCardText>" Menurut gua produk oddi keren abis, nyaman dipakai dan hits abis"</MDBCardText>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                </MDBRow>
              </MDBView>
            </MDBCarouselItem>
          </MDBCarouselInner>
        </MDBCarousel>
        {/* </MDBContainer> */}
      </div>
    );
  }
}

export default Card;
