import React from "react";
import ChartistGraph from "react-chartist";
import imagee from 'assets/img/logo 4.svg' ;
import image1 from 'assets/img/logo 4.svg' ;
import image2 from 'assets/img/logo 4.svg' ;
import image3 from 'assets/img/logo 4.svg' ;

// react-bootstrap components
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
import Vert from "./Vert"
import Semichart from "./Semichart";
import Newchart from "./Newchart";
import ChartSix from "./ChartSix";


function Dashboard() {
  return (
    <>
    <Row>
      <Col lg="12" sm="12">
       
        <Card className="card-statss">
        
           <Row>
           <Col xs="10">   
          <h2>Hi John, how are you?</h2>
          <p>All Systems are running smoothly !
             You Have <span className="text-danger">3 unread messages</span></p>
             </Col>
             <Col xs="2">
             <Form>
              
              <Form.Group >
               
                <Form.Control className="top-bar dashbooard"
                  defaultValue="Today(23rd Dec 2021)"
                  placeholder="Name"
                  type="text"

                >
                  
                </Form.Control>
              {/* <i className="nc-icon nc-zoom-split"></i> */}
              

              </Form.Group>
              </Form>
               </Col>  
             </Row>  
          </Card>
          </Col>
        </Row>
      <Container fluid>
      
       
        <Row>
        
          <Col lg="3" sm="6">
            <Card className="card-stats shadow">
              <Card.Body>
                <Row>
                <Col xs="6">
                  <h2 className="card-head">Weekely Sales</h2>
                  <h2 className="main-head">$47K</h2>
                  <button class="button button4"></button>
                  </Col>
                  <Col xs="6">
                  <CardChartone/> 
                  {/* <ChartSix/> */}
                  </Col>

                </Row>
             
              </Card.Body>
              {/* <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                      
                      <p class="text-danger">New Tickets</p>
                    </div>
                   
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Number</p>
                      <Card.Title as="h4">150GB</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  
                  Users
                </div>
              </Card.Footer> */}
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats shadow">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    <div className="icon-big text-center icon-warning">
                    <p class="text-danger">Daily Earnings</p>
                      {/* <i className="nc-icon nc-light-3 text-success"></i> */}
                     
                    </div>
                    
                  </Col>
                  <Col xs="7">
                    <div className="numbers shadow">
                      <p className="card-category">Revenue</p>
                      <Card.Title as="h4">$ 1,345</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="far fa-calendar-alt mr-1"></i>
                  Items
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats shadow">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    
                    <div className="icon-big text-center icon-warning">
                      {/* <i className="nc-icon nc-vector text-danger"></i> */}
                      <p className="text-danger">New Replies</p>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers shadow">
                      <p className="card-category">Errors</p>
                      <Card.Title as="h4">23</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="far fa-clock-o mr-1"></i>
                  Delivery Status
                </div>
              </Card.Footer>
            </Card>
          </Col>
          <Col lg="3" sm="6">
            <Card className="card-stats shadow">
              <Card.Body>
                <Row>
                  <Col xs="5">
                    
                    <div className="icon-big text-center icon-warning">
                    {/* <p className="text-danger">Closed Today</p> */}
                       <i className="nc-icon nc-favourite-28 text-primary"></i> 
                       <div>
       
         <img src={imagee} />
     </div>
                    </div>
                  </Col>
                  <Col xs="7">
                    <div className="numbers">
                      <p className="card-category">Followers</p>
                      <Card.Title as="h4">+45K</Card.Title>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
              <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="fas fa-redo mr-1"></i>
                  Products
                </div>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="6">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Chart Heading 1</Card.Title>
                <hr/>
                <p className="card-category">Sub Heading</p>
              </Card.Header>
              <Card.Body>
               
                <div>
                 <p>Chart 1 will be here </p>
                 
                </div>
              </Card.Body>
              {/* <Card.Footer>
                <div className="legend">
                  <i className="fas fa-circle text-info"></i>
                  Open <i className="fas fa-circle text-danger"></i>
                  Click <i className="fas fa-circle text-warning"></i>
                  Click Second Time
                </div>
                <hr></hr>
                <div className="stats">
                  <i className="fas fa-history"></i>
                  Updated 3 minutes ago
                </div>
              </Card.Footer> */}
            </Card>
          </Col>
          
          <Col md="6">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Chart Heading 2</Card.Title>
                <hr/>
                <p className="card-category">Sub Heading</p>
              </Card.Header>
              <Card.Body>
               
                <div>
                 <p>Chart 2 will be here </p>wil
                </div>
                <div>
                  
                </div>
                <div>

                </div>
                {/* <div className="legend">
                  <i className="fas fa-circle text-info"></i>
                  Open <i className="fas fa-circle text-danger"></i>
                  Bounce <i className="fas fa-circle text-warning"></i>
                  Unsubscribe
                </div>
                <hr></hr>
                <div className="stats">
                  <i className="far fa-clock"></i>
                  Campaign sent 2 days ago
                </div> */}
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md="6">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Chart Heading 3</Card.Title>
                <hr/>
                <p className="card-category">Sub Heading</p>
              </Card.Header>
              <Card.Body>
              {/* <NewCh/> */}
              Chart 3 will be here
              </Card.Body>
              
              
              {/* <Card.Footer>
                <div className="legend">
                  <i className="fas fa-circle text-info"></i>
                  Tesla Model S <i className="fas fa-circle text-danger"></i>
                  BMW 5 Series
                </div>
                <hr></hr>
                <div className="stats">
                  <i className="fas fa-check"></i>
                  Data information certified
                </div>
              </Card.Footer> */}
            </Card>
          </Col>
          <Col md="6">
            <Card className="card-tasks">
              <Card.Header>
                <Card.Title as="h4">Chart Heading 4</Card.Title>
                <hr/>
                <p className="card-category">Sub Heading</p>
              </Card.Header>
              <Card.Body>
                <div className="table-full-width">
                 Chart 4 will be here
                </div>
              </Card.Body>
              {/* <Card.Footer>
                <hr></hr>
                <div className="stats">
                  <i className="now-ui-icons loader_refresh spin"></i>
                  Updated 3 minutes ago
                </div>
              </Card.Footer> */}
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Dashboard;
