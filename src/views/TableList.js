import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import imagea from "assets/img/profile image.png";
import pic1 from "assets/img/pic1.png";
import pic2 from "assets/img/pic2.png";
import pic3 from "assets/img/pic3.png";
import pic4 from "assets/img/pic4.png";
import usa from "assets/img/usa.png";
import austraila from "assets/img/australia.png";
import uk from "assets/img/uk.png";
import germany from "assets/img/germany.png";
import brazil from "assets/img/brazil.png";
import Chartgeo from "../views/Chartgeo";
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
import NewCh from "./NewCh";
import Chartbar from "./Chartbar";
import chartist from "chartist";

function TableList() {
  return (
    <>
      < div className=" " style={{margin:'15px',backgroundColor:'#eeeeee'}}>
        <div className=" " style={{ margin: "15px",}}>
          <div className="d-flex">
            <div className="card container" style={{width:'681.75px',height:'334.5px',marginTop:'15px'}}>
              <p style={{ marginTop: "-19px",fontSize:'22px' }}><strong>Today's sales</strong></p>
              <p style={{marginTop:'-10px',fontSize:'13px' }}>looking all things are good</p>
              <p style={{ marginTop: "-9px", fontSize:'22px'}}>
                <strong>$362531.00</strong>
              </p>
              <div style={{ marginLeft: "-60px",marginTop:'-15px'}}>
                <Chartbar />
              </div>
            </div>
            <div
              className="card container"

              style={{width:'443.25px', height:'334.5px', marginLeft: "18px",marginTop:'15px' }}
            >
              <p style={{ marginTop: "-22px",marginLeft: "-4px", fontSize:'22px' }}>
                <strong>Top Performer</strong>
              </p>
              <div style={{margin:'-15px'}}>
              <div className=" d-flex" style={{ margin: "10px"}}>
                <img src={pic1}  />
                <h4 style={{ margin: "10px",marginLeft:'35px',fontSize:'13px'}}>Brandon Washington</h4>
              </div>
              <div className=" d-flex" style={{ margin: "10px"}}>
                <img src={pic2}  />
                <h4 style={{ margin: "10px",marginLeft:'35px',fontSize:'13px'}}>Brandon Washington</h4>
              </div>
              <div className=" d-flex" style={{ margin: "10px"}}>
                <img src={pic3} style={{height:'45px'}}/>
                <h4 style={{ margin: "10px",marginLeft:'35px',fontSize:'13px'}}>Brandon Washington</h4>
              </div>
              <div className=" d-flex" style={{ margin: "10px"}}>
                <img src={pic4} />
                <h4 style={{ margin: "10px",marginLeft:'35px',fontSize:'13px' }}>Brandon Washington</h4>
              </div>
              </div>
            </div>
          </div>
          <div className="d-flex">
            <div className="card container" style={{width:'592.5px',height:'433.5px',marginTop:'-5px'}}>
              <h3 style={{ marginTop: "-15.5px",fontSize:'22px',marginLeft:'12px' }}>Last Orders</h3>
              <table class="table" style={{fontSize:'13px'}}>
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Id</th>
                    <th scope="col">Date</th>
                    <th scope="col">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{fontSize:'13px'}}>Brandon Washington</td>
                    <td>32456</td>
                    <td>28/12/2021</td>
                    <td>$128</td>
                  </tr>
                  <tr>
                    <td style={{fontSize:'13px'}}>Brandon Washington</td>
                    <td>23423</td>
                    <td>28/12/2021</td>
                    <td>$128</td>
                  </tr>
                  <tr>
                    <td style={{fontSize:'13px'}}>Brandon Washington</td>
                    <td>76453</td>
                    <td>28/12/2021</td>
                    <td>$128</td>
                  </tr>
                  <tr>
                    <td style={{fontSize:'13px'}}>Brandon Washington</td>
                    <td>76453</td>
                    <td>28/12/2021</td>
                    <td>$128</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="card" style={{ marginLeft: "18px", width:'633.03px',height:'433.61px',marginTop:'-5px' }}>
              <h2 style={{ marginTop: "-14px",fontSize:'22px',marginLeft:'8px' }}>Sales by countries</h2>
              <div className="d-flex">
              <table class="table"style={{fontSize:'13px',marginLeft:'-5px'}}> 
                <tbody>
                  <tr>
                  <td>
                    <img src={usa} width={"50px"} />
                    </td>
                    <td>USA</td>
                    <td>$128</td>
                  </tr>
                  <tr>
                    <td>
                    <img src={austraila} width={"50px"} />
                    </td>
                    <td>Austrila</td>
                    <td>$128</td>
                  </tr>
                  <tr>
                  <td>
                    <img src={uk} width={"50px"} />
                    </td>
                    <td>U K</td>
                    <td>$128</td>
                  </tr>
                </tbody>
              </table>
              
              </div>
              <div style={{marginLeft:'120px'}}>
                {/* <Chartgeo/> */}
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TableList;
