import React from "react";
import Scstyles from "../assets/css/Scstyles.css";
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
} from "react-bootstrap";
import ChartFour from "./ChartFour";
import ChartThree from "./ChartThree";
// import Chartbar from "./Chartbar";
import Chartbar from "./Chartbar";

function TableList() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col lg="7" sm="6">
            <Card className="card">
              <Chartbar/>
            </Card>
          </Col>
          <Col lg="5" sm="6">
            <Card className="card-stats">
            <Card.Header>
                <Card.Title as="h4">Table with Information</Card.Title>
                
              </Card.Header>
              <hr/>
              <Card.Body>
              <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
              </Card.Body>
            </Card>
          </Col>
        </Row>



        <Row>
          <Col lg="7" sm="6">
            <Card className="card-stats">
              
              <Card.Header>
                <Card.Title as="h4">Chart Heading 10</Card.Title>
                <hr/>
                <p className="card-category">Sub Heading</p>
              </Card.Header>
              <Card.Body>
               
                <div>
                 <ChartFour/>
                </div>
              
              </Card.Body>
            </Card>
          </Col>
          <Col lg="5" sm="6">
            <Card className="card-stats">
            <Card.Header>
                <Card.Title as="h4">Table with Information</Card.Title>
                
              </Card.Header>
              <hr/>
              <Card.Body>
              <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
              </Card.Body>
            </Card>
          </Col>
        </Row>

      </Container>
      
    </>
  );
}

export default TableList;
