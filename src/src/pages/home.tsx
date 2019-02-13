import React from "react";
import {
  Jumbotron,
  Container,
  CardGroup,
  Card,
  CardDeck,
  Row,
  Col,
  Button
} from "react-bootstrap";

export class HomePage extends React.Component {
  render() {
    return (
      <div>
        <Jumbotron fluid>
          <Container>
            <h1>Happy Customer, Happy Business</h1>
            <p>
              We'll give you the ideal customer ordering experience. All you
              need to do is bring the food.
            </p>
            <p>
              <Button variant="primary">Get in touch!</Button>
            </p>
          </Container>
        </Jumbotron>
        <div className="container">
          <h5>
            Pai Now is designed with all parts of the food ordering process in
            mind
          </h5>
          <Row>
            <Col xs="12" md="4">
              <Card>
                <Card.Img variant="top" src="/images/woman-eating-pizza.jpg" />
                <Card.Body>
                  <Card.Title>Customers</Card.Title>
                  <Card.Text>
                    <ul>
                      <li>Stress free ordering</li>
                    </ul>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs="12" md="4">
              <Card>
                <Card.Img variant="top" src="/images/man-cooking.jpg" />
                <Card.Body>
                  <Card.Title>Employees</Card.Title>
                  <Card.Text>
                    <ul>
                      <li>More time focused on service</li>
                      <li>Less time focused on operating a POS</li>
                    </ul>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs="12" md="4">
              <Card>
                <Card.Img variant="top" src="/images/hand-pen.jpg" />
                <Card.Body>
                  <Card.Title>Owner</Card.Title>
                  <Card.Text>
                    <ul>
                      <li>Lower POS overhead</li>
                      <li>Insight into menu performance</li>
                    </ul>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
