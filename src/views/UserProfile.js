import React from "react";
import imagea from "assets/img/profile image.png";
import {
  Badge,
  Button,
  Card,
  Form,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import Toast from "react-bootstrap/Toast";
import Table from "react-bootstrap/Table";
import ProgressBar from "react-bootstrap/ProgressBar";
import ChartOne from "./ChartOne";
import ChartTwo from "./ChartTwo";
import ChartFive from "./ChartFive";
import ChartSix from "./ChartSix";
import ChartSeven from "./ChartSeven";
function User() {
  return (
    <>
      <Container fluid className="Gray-Content">
        <Row>
          <Col md="7">
            <Card className="card-tasks">
              <Card.Header>
                <Card.Title as="h4">Detailed Reports</Card.Title>
                <hr />
                <p className="card-category graph">
                  {" "}
                  Users <span className="card-para"> 12.3k</span>
                  Downloads <span className="card-para">34040</span>
                </p>
              </Card.Header>
              <Card.Body>
                <div className="table-full-width">
                  <ChartTwo />
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md="5">
            <Card className="card-tasks">
              <Card.Header>
                <Card.Title as="h4">Detailed Reports</Card.Title>
                <hr />

                <p className="card-category">
                  User is actively engaged with your
                  <span className="card-text">Website, page, app </span>etc
                </p>
              </Card.Header>
              <Card.Body>
                <div className="table-full-width">
                  <ChartSeven />
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <div className="card">
            <h2 style={{marginTop:"-20px"}}>Cards</h2>
            
            <p style={{margin:"0"}}>card 1</p>
            <div className="d-flex">
            <progress
              className="progress1"
              style={{ height: "20px" }}
              id="file"
              value="32"
              max="100"
            >
              {" "}
              32%{" "}
            </progress>
            <p style={{marginLeft:"10px"}}>312</p>
            </div>
            <p style={{margin:"0"}}>card 2</p>
            <div className="d-flex">
            <progress
              className="progress1"
              style={{ height: "20px" }}
              id="file"
              value="32"
              max="100"
            >
              {" "}
              32%{" "}
            </progress>
            <p>123</p>
            </div>
            <p style={{margin:"0"}}>card 3</p>
            <div className="d-flex">
            <progress
              className="progress1"
              style={{ height: "20px" }}
              id="file"
              value="32"
              max="100"
            >
              {" "}
              32%{" "}
            </progress>
            <p>123</p>
            </div>
            <p style={{margin:"0"}}>card 4</p>
            <div className="d-flex">
            <progress
              className="progress1"
              style={{ height: "20px" }}
              id="file"
              value="32"
              max="100"
            >
              {" "}
              32%{" "}
            </progress>
            <p>123</p>
            </div>
            <p style={{margin:"0"}}>card 5</p>
            <div className="d-flex">
            <progress
              className="progress1"
              style={{ height: "20px" }}
              id="file"
              value="32"
              max="100"
            >
              {" "}
              32%{" "}
            </progress>
            <p>123</p>
            </div>
          </div>
          <Col md="6">
            <Card className="card-tasks">
              <Card.Header>
                <Card.Title as="h4">Top Products</Card.Title>
              </Card.Header>
              <Card.Body>
                <div className="table-full-width">
                  <Table>
                    <thead>
                      <tr>
                        <th>product</th>
                        <th>Price</th>
                        <th>Date</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Search Engine Marketing</td>
                        <td>$551</td>
                        <td>21 Sep 2018</td>
                        <td>
                          <Button variant="danger">Complete</Button>
                        </td>
                      </tr>
                      <tr>
                        <td>Search Engine Optimization</td>
                        <td>$263</td>
                        <td>13 Jun 2018</td>
                        <td>
                          <Button variant="danger">Complete</Button>
                        </td>
                      </tr>
                      <tr>
                        <td>Display advertising</td>
                        <td>$453</td>
                        <td>28 Sep 2018</td>
                        <td>
                          <Button variant="info">Pending</Button>
                        </td>
                      </tr>
                      <tr>
                        <td>Pay per Click Advertising</td>
                        <td>$119</td>
                        <td>30 Jun 2018</td>
                        <td>
                          <Button variant="primary">Cancelled</Button>
                        </td>
                      </tr>
                      <tr>
                        <td>Eimail Marketing</td>
                        <td>$362</td>
                        <td>01 Nov 2018</td>
                        <td>
                          <Button variant="info">Pending </Button>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md="3">
            <Card className="card-tasks">
              <Card.Header>
                <Card.Title as="h4">Notifications</Card.Title>
              </Card.Header>
              <Card.Body className="noti">
                <div className="table-full-width">
                  <Toast className="notifi">
                    <Toast.Header>
                      <img src={imagea} className="rounded me-2" alt="" />
                      <strong className="me-auto">issabella backer</strong>
                    </Toast.Header>
                    <Toast.Body>
                      Sales Dashboard Have been created
                      <p className="toast-text">9.30 am</p>
                    </Toast.Body>
                  </Toast>
                  <Toast className="notifi">
                    <Toast.Header>
                      <img src={imagea} className="rounded me-2" alt="" />
                      <strong className="me-auto">dden Barley</strong>
                    </Toast.Header>
                    <Toast.Body>
                      You have done a great Job
                      <p className="toast-text">9.30 am</p>
                    </Toast.Body>
                  </Toast>
                  <Toast className="notifi">
                    <Toast.Header>
                      <img src={imagea} className="rounded me-2" alt="" />
                      <strong className="me-auto">Smith jones</strong>
                    </Toast.Header>
                    <Toast.Body>
                      Sales Dashboard Have been created
                      <p className="toast-text">9.30 am</p>
                    </Toast.Body>
                  </Toast>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default User;
