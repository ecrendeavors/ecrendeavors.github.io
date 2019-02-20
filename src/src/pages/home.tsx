import React from "react";
import {
  Jumbotron,
  Container,
  CardGroup,
  Card,
  CardDeck,
  Row,
  Col,
  Button,
  Modal
} from "react-bootstrap";

interface HomePageState {
  showModal: boolean;
}
export class HomePage extends React.Component<{}, HomePageState> {
  state = {
    showModal: false
  };

  render() {
    return (
      <div>
        <Modal
          show={this.state.showModal}
          onHide={() => this.setState({ showModal: false })}
        >
          <Modal.Header closeButton>
            <Modal.Title>Email Our Sales Team</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>
              ecrendevors<span>@</span>
              <span>gmail.com</span>
            </p>
          </Modal.Body>
        </Modal>

        <Jumbotron fluid className={"hero-banner"}>
          <Container>
            <h1>Happy Customer, Happy Business</h1>
            <p>
              We'll handle all the transaction workflows. You just do what you
              do best, serving the customers.
            </p>
            <p>
              Pai 排 Now is designed with the end to end ordering process in
              mind.
            </p>
            <p>
              <Button
                variant="primary"
                onClick={() => this.setState({ showModal: true })}
              >
                Get in touch!
              </Button>
            </p>
          </Container>
        </Jumbotron>
        <div className="container bottomSpace">
          <p>
            <h5>
              Pai Now is designed with all parts of the food ordering process in
              mind.
            </h5>
          </p>
          <Row>
            <Col xs="12" md="4">
              <Card className={"fullHeight"}>
                <Card.Img variant="top" src="/images/woman-eating-pizza.jpg" />
                <Card.Body>
                  <Card.Title>Customers</Card.Title>
                  <Card.Text>
                    <p>
                      Stress free ordering - no rush, no queue. Just click and
                      eat!
                    </p>
                    <p>No-stress payment - cash free and secure.</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs="12" md="4">
              <Card className={"fullHeight"}>
                <Card.Img variant="top" src="/images/man-cooking.jpg" />
                <Card.Body>
                  <Card.Title>Employees</Card.Title>
                  <Card.Text>
                    <p>
                      More time to focus on service. Less time managing the POS
                    </p>
                    <p>
                      Easy, intuitive interface that lets your employees focus
                      on what they do best - making customers happy
                    </p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs="12" md="4">
              <Card className={"fullHeight"}>
                <Card.Img variant="top" src="/images/hand-pen.jpg" />
                <Card.Body>
                  <Card.Title>Owner</Card.Title>
                  <Card.Text>
                    <p>
                      Reduce overheads. Pai Now is the new end to end solution
                      for business owners. No more expensive hardware and high
                      transaction fees.
                    </p>
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
