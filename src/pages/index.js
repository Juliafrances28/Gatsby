import React from "react";
import Container from "../components/container";
import Col from "../components/col";
import Row from "../components/row";
import Header from "../components/header";
// import Footer from "../components/footer";
// import ColumnSection from "../components/col";

// import "./src/global.css";
import "./style.css";

export default function container() {
  return (
    <div>
      <Header />
      <Container className="horizontal grid">
        <Row>
          <Col>
            <div className="left-col md 6 ">
              <div className="grid auto ">
                <div className="Up">
                  {" "}
                  <strong> Uptown </strong>{" "}
                </div>
              </div>

              <div className="grid auto ">
                <div className="station">to Eastchester-Dyre Av </div>
                <div className="time place-content-between"> 1 min </div>
              </div>

              <div className="grid auto ">
                <div className="station">to Woodlawn </div>
                <div className="time"> 2 min </div>
              </div>

              <div className="grid auto">
                <div className="station">to Harlem-148 St </div>
                <div className="time"> 5 min </div>
              </div>

              <div className=" grid auto">
                <div className="station">to Wakefield 241 St </div>
                <div className="time"> 8 min </div>
              </div>

              <div className=" grid auto">
                <div className="station">
                  to Jamaica Center- Parson/Archer Av
                </div>
                <div className="time"> 10 min </div>
              </div>

              <div className=" grid auto">
                <div className="station">to Far Rockaway - Motts Av </div>
                <div className="time"> 10 min </div>
              </div>

              <div className=" grid auto">
                <div className="station"> to Ozone Park-Lefferts </div>
                <div className="time"> 15 min </div>
              </div>
            </div>
          </Col>
        </Row>

        <Row>
          <Col>
            <div className="right-col md 6  ">
              <div className="grid auto">
                <div className="Down">
                  {" "}
                  <strong> Downtown </strong>{" "}
                </div>
              </div>

              <div className=" grid auto">
                <div className="station"> to Broad St </div>
                <div className="time flex"> 1 min </div>
              </div>

              <div className=" grid auto">
                <div className="station"> to Euclid Av </div>
                <div className="time"> 3 min </div>
              </div>

              <div className=" grid auto">
                <div className="station"> to Crown Hts-Utica Av </div>
                <div className="time"> 5 min </div>
              </div>

              <div className=" grid auto">
                <div className="station"> to New Lots Av </div>
                <div className="time"> 7 min</div>
              </div>

              <div className=" grid auto">
                <div className="station">
                  {" "}
                  to Flatbush Av- Brooklyn College{" "}
                </div>
                <div className="time"> 9 min</div>
              </div>

              <div className=" grid auto">
                <div className="station">to Crown Hts-Utica Av </div>
                <div className="time"> 10 min </div>
              </div>

              <div className=" grid auto ">
                <div className="station">to Broad St </div>
                <div className="time"> 20 min </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
