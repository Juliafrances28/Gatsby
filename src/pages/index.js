import React from "react";
import Container from "../components/container";
import Col from "../components/col";
import Header from "../components/header";
import Row from "../components/row";
import Footer from "../components/footer";
import "./style.css";

export default function container() {
  return (
    <div>
      <Header />
      <row>
        <col>
          {" "}
          <h2 class="up"> Uptown</h2>{" "}
        </col>
        <col>
          {" "}
          <h2 class="down"> Downtown </h2>{" "}
        </col>
      </row>

      <Container>
        <Row>
          <Col>
            <div class="left-col">
              <div class="row">
                <div class="station"> to Eastchester-Dyre Av </div>
                <div class="time">1 min</div>
              </div>

              <div class="row">
                <div class="station">to Woodlawn</div>
                <div class="time">2 min </div>
              </div>

              <div class="row">
                <div class="station">to Harlem-148 St</div>
                <div class="time"> 5 min </div>
              </div>

              <div class="row">
                <div class="station">to Wakefield 241 St </div>
                <div class="time"> 8 min </div>
              </div>

              <div class="row">
                <div class="station">to Jamaica Center- Parson/Archer Av </div>
                <div class="time">10 min </div>
              </div>

              <div class="row">
                <div class="station">to Far Rockaway - Motts Av </div>
                <div class="time">10 min </div>
              </div>

              <div class="row">
                <div class="station"> to Ozone Park-Lefferts </div>
                <div class="time"> 15 min</div>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div class="right-col">
              <div class="row">
                <div class="station"> to Broad St </div>
                <div class="time"> 1 min </div>
              </div>

              <div class="row">
                <div class="station"> to Euclid Av </div>
                <div class="time"> 3 min </div>
              </div>

              <div class="row">
                <div class="station"> to Crown Hts-Utica Av </div>
                <div class="time"> 5 min </div>
              </div>

              <div class="row">
                <div class="station"> to New Lots Av </div>
                <div class="time"> 7 min</div>
              </div>

              <div class="row">
                <div class="station"> to Flatbush Av- Brooklyn College </div>
                <div class="time"> 9 min</div>
              </div>

              <div class="row">
                <div class="station">to Crown Hts-Utica Av </div>
                <div class="time"> 10 min </div>
              </div>

              <div class="row">
                <div class="station">to Broad St </div>
                <div class="time"> 20 min </div>
              </div>
            </div>
          </Col>
        </Row>
        <Footer />
      </Container>
    </div>
  );
}
