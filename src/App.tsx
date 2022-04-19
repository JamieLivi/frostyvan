import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import { Container, Row, Col, Carousel, Button } from "react-bootstrap";
import AvailabilityCalendar from "./components/AvailabilityCalendar";
const img1 = require("./assets/camper1.jpeg");
const img2 = require("./assets/camper2.jpeg");

const App = () => {
  return (
    <main>
      <Container fluid className="p-0 m-0">
        <Row className="p-0">
          <Col className="text-center p-0">
            <div className="jumbotron-fluid my-2">
              <h1 className="mb-0 pb-0 fw-bold">Ford Transit Campervan</h1>
              <h4 className="py-0 my-0 fs-5 fw-normal text-wrap">{`Available to rent | Harringay, North London`}</h4>
            </div>
          </Col>
        </Row>
        <Row className="pt-2">
          <Col xs={10} sm={6} className="text-center mx-auto">
            <Carousel>
              <Carousel.Item>
                <img className="img-fluid" src={img1} />
              </Carousel.Item>
              <Carousel.Item>
                <img className="img-fluid" src={img2} />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
        <Row className="pt-2">
          <Col xs={12} sm={6} className="text-center mx-auto">
            <p className="text-muted fs-6 px-2 px-md-0">
              Please note that due to Fat Llama's decision in 2021 to stop
              organising insurance, the van will only be available for rental
              through GoBoony and Camplify going forward. See links below for
              details.
            </p>
          </Col>
        </Row>
        <Row className="">
          <Col xs={10} md={6} className="text-center mx-auto px-2">
            <div className="d-grid gap-2 px-2">
              <Button
                href="https://www.camplify.co.uk/18274"
                variant="camplify"
              >
                View on Camplify
              </Button>
              <Button
                href="https://www.goboony.co.uk/listings/22051"
                variant="goboony"
              >
                View on Goboony
              </Button>
            </div>
            {/* <Button className="me-2">View on Camplify</Button>
          <Button>View on GoBoony</Button> */}
          </Col>
        </Row>
        <hr />
        <Row>
          <Col xs={12} sm={6} className="text-center mx-auto py-4">
            <p>
              Any questions,{" "}
              <a href="mailto:jamie.livingstone1@outlook.com?subject=Campervan">
                send me an email
              </a>
            </p>
          </Col>
        </Row>

        {/* <Row className="py-2">
          <Col xs={12} md={8} className="text-center mx-auto">
            <h2>Availability Calendar</h2>
            <AvailabilityCalendar />
          </Col>
        </Row> */}
      </Container>
    </main>
  );
};

export default App;
