import React from "react";
import Container from "../components/container";
import Col from "../components/col";
import Row from "../components/row";
import Header from "../components/header";
// import ColumnSection from "../components/col";
// import Footer from "../components/footer";
import "./style.css";

export default function container() {
  return (
    <div className="grid-rows-7 gap-4">
      {/* <Header /> */}

      {/* <header className="bg-gray text-white py-6 px-4">
        <h1 className="text-2xl">Next Departing Trains </h1>
        <h4> New York City Subway </h4>
      </header>  */}
      {/* <Header />
      <Container>
        <Row>
          {" "}
          <div>
            <div>
              {" "}
              <h2 className="grid-rows-1">
                {" "}
                Uptown &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;
                &emsp;&emsp; &emsp; Downtown{" "}
              </h2>{" "}
            </div>
          </div>
        </Row>
      </Container> */}

      <Container>
        <Row>
          <Col>
            <div className="left-col md 6">
              <div className="grid grid-rows-7 grid-flow-col-2 gap-4">
                <div className="station"> to Eastchester-Dyre Av </div>
                <div className="time"> 1 min </div>
              </div>

              <div className="grid grid-rows-7 grid-flow-col-2 gap-4">
                <div className="station">to Woodlawn </div>
                <div className="time"> 2 min </div>
              </div>

              <div className="grid grid-rows-7 grid-flow-col-2 gap-4">
                <div className="station">to Harlem-148 St </div>
                <div className="time"> 5 min </div>
              </div>

              <div className=" grid grid-rows-7 grid-flow-col-2 gap-4">
                <div className="station">to Wakefield 241 St </div>
                <div className="time"> 8 min </div>
              </div>

              <div className=" grid grid-rows-7 grid-flow-col-2 gap-4">
                <div className="station">
                  to Jamaica Center- Parson/Archer Av{" "}
                </div>
                <div className="time"> 10 min </div>
              </div>

              <div className=" grid grid-rows-7 grid-flow-col-2 gap-4">
                <div className="station">to Far Rockaway - Motts Av </div>
                <div className="time"> 10 min </div>
              </div>

              <div className=" grid grid-rows-7 grid-flow-col-2 gap-4">
                <div className="station"> to Ozone Park-Lefferts </div>
                <div className="time"> 15 min </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <div className="right-col- md 6">
              <div className=" grid grid-rows-7 grid-col-2 gap-4">
                <div className="station"> to Broad St </div>
                <div className="time"> 1 min </div>
              </div>

              <div className=" grid grid-rows-7 grid-flow-col-2 gap-4">
                <div className="station"> to Euclid Av </div>
                <div className="time"> 3 min </div>
              </div>

              <div className=" grid grid-rows-7 grid-flow-col-2 gap-4">
                <div className="station"> to Crown Hts-Utica Av </div>
                <div className="time"> 5 min </div>
              </div>

              <div className=" grid grid-rows-7 grid-flow-col-2 gap-4">
                <div className="station"> to New Lots Av </div>
                <div className="time"> 7 min</div>
              </div>

              <div className=" grid grid-rows-7 grid-flow-col-2 gap-4">
                <div className="station">
                  {" "}
                  to Flatbush Av- Brooklyn College{" "}
                </div>
                <div className="time"> 9 min</div>
              </div>

              <div className=" grid grid-rows-7 grid-flow-col-2 gap-4">
                <div className="station">to Crown Hts-Utica Av </div>
                <div className="time"> 10 min </div>
              </div>

              <div className=" grid grid-rows-7 grid-flow-col-2 gap-4">
                <div className="station">to Broad St </div>
                <div className="time"> 20 min </div>
              </div>
            </div>
          </Col>
        </Row>
        {/* <Footer /> */}
      </Container>
    </div>
  );
}
