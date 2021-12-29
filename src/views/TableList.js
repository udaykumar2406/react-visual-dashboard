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
      <div
        className=" "
        style={{
          margin: "10px",
          marginTop: "-5px",
          backgroundColor: "#eeeeee",
        }}
      >
        <div className=" " style={{ margin: "10px", marginTop: "5px" }}>
          <div className="d-flex">
            <div
              className="card container"
              style={{
                width: "681.75px",
                height: "334.5px",
                marginTop: "15px",
              }}
            >
              <div
                style={{
                  marginTop: "5px",
                  marginLeft: "-7px",
                  marginRight: "5px",
                  marginBottom: "5px",
                }}
              >
                <p style={{ marginTop: "-19px", fontSize: "22px" }}>
                  <strong>Today's sales</strong>
                </p>
                <p style={{ marginTop: "-10px", fontSize: "13px" }}>
                  looking all things are good
                </p>
                <p style={{ marginTop: "-9px", fontSize: "22px" }}>
                  <strong>$362531.00</strong>
                </p>
                <div style={{ marginLeft: "-60px", marginTop: "-15px" }}>
                  <Chartbar />
                </div>
              </div>
            </div>
            <div
              className="card container"
              style={{
                width: "443.25px",
                height: "334.5px",
                marginLeft: "18px",
                marginTop: "15px",
                marginRight: "8px",
              }}
            >
              <div
                style={{
                  marginTop: "5px",
                  marginLeft: "5px",
                  marginRight: "5px",
                  marginBottom: "5px",
                }}
              >
                <p
                  style={{
                    marginTop: "-19px",
                    marginLeft: "-12px",
                    fontSize: "22px",
                  }}
                >
                  <strong>Top Performer</strong>
                </p>
                <div style={{ margin: "0px" }}>
                  <div className=" d-flex" style={{ margin: "10px" }}>
                    <img src={pic1} style={{ marginLeft: "-21px" }} />
                    <h4
                      style={{
                        margin: "10px",
                        marginLeft: "35px",
                        fontSize: "13px",
                      }}
                    >
                      Brandon Washington
                    </h4>
                    <p
                      style={{
                        fontSize: "12px",
                        marginLeft: "65px",
                        marginTop: "15px",
                      }}
                    >
                      1hr ago
                    </p>
                  </div>
                  <div className=" d-flex" style={{ margin: "10px" }}>
                    <img src={pic2} style={{ marginLeft: "-21px" }} />
                    <h4
                      style={{
                        margin: "10px",
                        marginLeft: "35px",
                        fontSize: "13px",
                      }}
                    >
                      Brandon Washington
                    </h4>
                    <p
                      style={{
                        fontSize: "12px",
                        marginLeft: "65px",
                        marginTop: "15px",
                      }}
                    >
                      1hr ago
                    </p>
                  </div>
                  <div className=" d-flex" style={{ margin: "10px" }}>
                    <img
                      src={pic3}
                      style={{ height: "45px", marginLeft: "-21px" }}
                    />
                    <h4
                      style={{
                        margin: "10px",
                        marginLeft: "34px",
                        fontSize: "13px",
                      }}
                    >
                      Brandon Washington
                    </h4>
                    <p
                      style={{
                        fontSize: "12px",
                        marginLeft: "65px",
                        marginTop: "15px",
                      }}
                    >
                      1hr ago
                    </p>
                  </div>
                  <div className=" d-flex" style={{ margin: "10px" }}>
                    <img src={pic4} style={{ marginLeft: "-21px" }} />
                    <h4
                      style={{
                        margin: "10px",
                        marginLeft: "35px",
                        fontSize: "13px",
                      }}
                    >
                      Brandon Washington
                    </h4>
                    <p
                      style={{
                        fontSize: "12px",
                        marginLeft: "65px",
                        marginTop: "15px",
                      }}
                    >
                      1hr ago
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex">
            <div
              className="card container"
              style={{ width: "592.5px", height: "403.5px", marginTop: "-5px" }}
            >
              <div style={{ marginLeft: "-19px" }}>
                <p
                  style={{
                    marginTop: "-13.5px",
                    fontSize: "22px",
                    marginLeft: "12px",
                  }}
                >
                  <strong>Last Orders</strong>
                </p>
                <table class="table" style={{ fontSize: "13px" }}>
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
                      <td style={{ fontSize: "13px" }}>
                        <img
                          src={pic1}
                          style={{ marginLeft: "-2px", paddingRight: "10px" }}
                        />
                        Brandon Washington
                      </td>
                      <td>32456</td>
                      <td>28/12/2021</td>
                      <td>$128</td>
                    </tr>
                    <tr>
                      <td style={{ fontSize: "13px" }}>
                        <img
                          src={pic2}
                          style={{ marginLeft: "-2px", paddingRight: "10px" }}
                        />
                        Brandon Washington
                      </td>
                      <td>23423</td>
                      <td>28/12/2021</td>
                      <td>$128</td>
                    </tr>
                    <tr>
                      <td style={{ fontSize: "13px" }}>
                        <img
                          src={pic3}
                          style={{
                            height: "45px",
                            marginLeft: "-2px",
                            paddingRight: "10px",
                          }}
                        />
                        Brandon Washington
                      </td>
                      <td>76453</td>
                      <td>28/12/2021</td>
                      <td>$128</td>
                    </tr>
                    <tr>
                      <td style={{ fontSize: "13px" }}>
                        <img
                          src={pic4}
                          style={{ marginLeft: "-2px", paddingRight: "10px" }}
                        />
                        Brandon Washington
                      </td>
                      <td>76453</td>
                      <td>28/12/2021</td>
                      <td>$128</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div
              className="card"
              style={{
                marginLeft: "18px",
                width: "592px",
                height: "403.5px",
                marginTop: "-5px",
                marginRight: "8px",
              }}
            >
              <div style={{ marginLeft: "-17px", marginTop: "1px" }}>
                <p
                  style={{
                    marginTop: "-15px",
                    fontSize: "22px",
                    marginLeft: "8px",
                  }}
                >
                  <strong>Sales by countries</strong>
                </p>
                <div className="">
                  <div className=" d-flex" style={{ margin: "10px" }}>
                    <img
                      src={usa}
                      style={{ height: "45px",width:'60px',height:'30px',marginTop:'8px' }}
                    />
                    <h4
                      style={{
                        margin: "10px",
                        marginLeft: "34px",
                        fontSize: "13px",
                      }}
                    >
                      USA
                    </h4>
                    <p
                      style={{
                        fontSize: "12px",
                        marginLeft: "250px",
                        marginTop: "15px",
                      }}
                    >
                      1hr ago
                    </p>
                  </div>
                  <div className=" d-flex" style={{ margin: "10px" }}>
                    <img
                      src={austraila}
                      style={{ height: "45px",width:'60px',height:'30px',marginTop:'8px' }}
                    />
                    <h4
                      style={{
                        margin: "10px",
                        marginLeft: "34px",
                        fontSize: "13px",
                      }}
                    >
                      Austraila
                    </h4>
                    <p
                      style={{
                        fontSize: "12px",
                        marginLeft: "225px",
                        marginTop: "15px",
                      }}
                    >
                      1hr ago
                    </p>
                  </div>
                  <div className=" d-flex" style={{ margin: "10px" }}>
                    <img
                      src={uk}
                      style={{ height: "45px",width:'60px',height:'30px',marginTop:'8px'}}
                    />
                    <h4
                      style={{
                        margin: "10px",
                        marginLeft: "34px",
                        fontSize: "13px",
                      }}
                    >
                      United Kingdom
                    </h4>
                    <p
                      style={{
                        fontSize: "12px",
                        marginLeft: "183px",
                        marginTop: "15px",
                      }}
                    >
                      1hr ago
                    </p>
                  </div>
                  <div className=" d-flex" style={{ margin: "10px" }}>
                    <img
                      src={germany}
                      style={{ height: "45px",width:'60px',height:'30px',marginTop:'8px'}}
                    />
                    <h4
                      style={{
                        margin: "10px",
                        marginLeft: "34px",
                        fontSize: "13px",
                      }}
                    >
                      Germany
                    </h4>
                    <p
                      style={{
                        fontSize: "12px",
                        marginLeft: "222px",
                        marginTop: "15px",
                      }}
                    >
                      1hr ago
                    </p>
                  </div>
                </div>
              </div>
              <div style={{ marginLeft: "120px" }}>{/* <Chartgeo/> */}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TableList;
