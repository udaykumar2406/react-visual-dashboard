import React from "react";
import ChartistGraph from "react-chartist";
import imagee from "assets/img/logo 4.svg";
import troly from "assets/img/trolly.svg";
import market from "assets/img/market.svg";
import sales from "assets/img/sales.svg";
import image1 from "assets/img/logo 4.svg";
import image2 from "assets/img/logo 4.svg";
import image3 from "assets/img/logo 4.svg";
import StyleSheet from "../assets/css/dashboard.module.css";
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
  Form,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import Chart from "./Chart";
import CardChartone from "./CardChartone";
import NewCh from "./NewCh";
import Vert from "./Vert";
import Semichart from "./Semichart";
import Newchart from "./Newchart";
import ChartSix from "./ChartSix";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
import Chartpie from "./Chartpie";
import { Scatter } from "recharts";

function Dashboard() {
  
  return (
    <>
      <Row>
        <Col lg="12" sm="12">
          <Card className="card-statss">
            <Row style={{ marginTop: "-35px" }}>
              <Col xs="10">
                <h2>Hi John, how are you?</h2>
                <p>
                  All Systems are running smoothly ! You Have{" "}
                  <span className="text-danger">3 unread messages</span>
                </p>
              </Col>
              <Col xs="2">
                <Form style={{ marginTop: "30px" }}>
                  <Form.Group>
                    <Form.Control
                      className="dashbooard"
                      defaultValue="Today(23rd Dec 2021)"
                      placeholder="Name"
                      type="text"
                    ></Form.Control>
                  </Form.Group>
                </Form>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
      <Container>
        <Row className="cards">
          <Col lg="3" sm="6">
            <Card className="card-stats container shadow">
            <div>
             <p style={{ marginTop: "20px" }}>
                  <strong>Total sales</strong>
                </p>
                <div className="d-flex">
                <h2>59.9k</h2>
                <div>
                <img style={{marginTop:"20px", marginLeft:"40px"}} src={ sales} width={"70px"} />
                </div>
              </div>
             </div>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats container shadow">
              <div>
                <p style={{ marginTop: "20px" }}>
                  <strong>Total Orders</strong>
                </p>
              </div>

              <div className="d-flex">
                <h2>$57k</h2>
                <img style={{marginLeft:"50px"}}src={troly} width={"60px"}/>
              </div>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats container shadow">
             <div>
             <p style={{ marginTop: "20px" }}>
                  <strong>Market Share</strong>
                </p>
                <div className="d-flex">
                <h2>$87k</h2>
                <img style={{marginLeft:"50px"}} src={ troly} width={"60px"}/>
              </div>
             </div>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats container shadow">
            <div>
             <p style={{ marginTop: "20px" }}>
                  <strong>Weekly sales</strong>
                </p>
                <div className="d-flex">
                <h2>59.9k</h2>
                <img style={{marginLeft:"40px"}} src={ market} width={"60px"}/>
              </div>
             </div>
            </Card>
          </Col>
        </Row>
      </Container>
      <Row>
        <Col className="col-lg-12 line shadow container">
          <Card className="">
            <Card.Body>
              <div className="charts col-lg-12 d-flex">
                <div className="reports">
                  <h3>Daily Reports</h3>
                  <h1 className="text-primary">$34040</h1>
                  <h4 className="text-primary">North America</h4>
                  <p>
                    <div>
                      The total number of sessions
                      with in the date range.it is the
                      period time a user is actively
                      engaged with your website,
                      page or app etc
                    </div>
                  </p>
                </div>
                <div className="bars">
                  <div>
                    <div className="d-flex">
                      <div>
                        <p className="text">Illinous</p>
                        <p className="text">Washington</p>
                        <p className="text">Mississippi</p>
                        <p className="text">Califomia</p>
                        <p className="text">Marylad</p>
                        <p className="text">Alaska</p>
                      </div>

                      <div className="pro">
                        <div class="progress">
                          <div
                            class="progress-bar progress-bar-striped"
                            style={{color:"#FB200 "}}
                            role="progressbar"
                            style={{ width: "15%" }}
                            aria-valuenow="10"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <div class="progress">
                          <div
                            className="progress-bar progress-bar-striped bg-success"
                            role="progressbar"
                            style={{ width: "25%", padding: "20px" }}
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <div class="progress">
                          <div
                            className="progress-bar progress-bar-striped bg-primary"
                            role="progressbar"
                            style={{ width: "35%" }}
                            aria-valuenow="35"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <div class="progress">
                          <div
                            className="progress-bar progress-bar-striped bg-secondary"
                            role="progressbar"
                            style={{ width: "45%" }}
                            aria-valuenow="45"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <div class="progress">
                          <div
                            className="progress-bar progress-bar-striped bg-info"
                            role="progressbar"
                            style={{ width: "55%" }}
                            aria-valuenow="55"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                        <div class="progress">
                          <div
                            className="progress-bar progress-bar-striped bg-danger"
                            role="progressbar"
                            style={{ width: "65%" }}
                            aria-valuenow="65"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                      <div className="number">
                        <h4 className="number1">100</h4>
                        <h4 className="number1">345</h4>
                        <h4 className="number1">453</h4>
                        <h4 className="number1">548</h4>
                        <h4 className="number1">665</h4>
                        <h4 className="number1">842</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="graph d-flex">
                  <div style={{marginLeft:"30px" , marginTop:"-60px"}}>
                  <Chartpie />
                  
                  </div>
                  
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default Dashboard;
