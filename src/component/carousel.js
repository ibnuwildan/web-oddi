import React, { Component } from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from "mdbreact";

class Carousel extends Component {
  render() {
    return (
      // <div>
      // <MDBContainer>
      <MDBCarousel activeItem={1} length={3} showControls={false} showIndicators={false} className="z-depth-1" slide>
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img className="d-block w-100" src={require("../img/work2.jpg")} alt="First slide" />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(33).jpg" alt="Second slide" />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img className="d-block w-100" src="https://mdbootstrap.com/img/Photos/Slides/img%20(31).jpg" alt="Third slide" />
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
      // </MDBContainer>
      // </div>
    );
  }
}

export default Carousel;
