import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBSimpleChart
} from "mdbreact";

class AllStats extends React.Component {
  render() {
    return (
      <MDBContainer>
        <h3 className="mt-5">Minimalistic charts</h3>
        <div style={{ marginTop: "100px" }}>
          <MDBContainer>
            <MDBRow className="text-center">
              <MDBCol sm="4">
                <MDBSimpleChart
                  width={100}
                  height={100}
                  strokeWidth={3}
                  percent={56}
                  strokeColor="#4FB64E"
                  labelFontWeight="300"
                  labelColor="#000"
                />
                <h6 className="mt-5">
                  <span className="label green p-1 white-text">
                    <strong>Sales</strong>
                    <MDBIcon icon="arrow-circle-up" className="ml-1" />
                  </span>
                </h6>
              </MDBCol>
              <MDBCol sm="4">
                <MDBSimpleChart
                  width={100}
                  height={100}
                  strokeWidth={3}
                  percent={76}
                  strokeColor="#EA3C3B"
                  labelFontWeight="300"
                  labelColor="#000"
                />
                <h6 className="mt-5">
                  <span className="label red p-1 white-text">
                    <strong>ROI</strong>
                    <MDBIcon icon="arrow-circle-down" className="ml-1" />
                  </span>
                </h6>
              </MDBCol>
              <MDBCol sm="4">
                <MDBSimpleChart
                  width={100}
                  height={100}
                  strokeWidth={3}
                  percent={100}
                  strokeColor="#9D9D9D"
                  labelFontWeight="300"
                  labelColor="#000"
                />
                <h6 className="mt-5">
                  <span className="label grey p-1 white-text">
                    <strong>Conversion</strong>
                    <MDBIcon icon="minus-square" className="ml-1" />
                  </span>
                </h6>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
      </MDBContainer>
    );
  }
}

export default AllStats