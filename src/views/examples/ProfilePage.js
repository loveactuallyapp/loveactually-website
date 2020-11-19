
import React from "react";

// reactstrap components
import {
  Button,
 
  NavItem,
  NavLink,
  Nav,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

function ProfilePage() {
  const [activeTab, setActiveTab] = React.useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    return function cleanup() {
      document.body.classList.remove("landing-page");
    };
  });
  return (
    <>
      <ExamplesNavbar />
      <ProfilePageHeader />
      <div className="section profile-content">
        <Container>
          <div className="owner">
            <div className="avatar">
              <img
                alt="..."
                className="img-circle img-no-padding img-responsive"
                src={require("assets/img/apple-icon.png")}
              />
            </div>
            <div className="name">
           
              <h2 className="title">About Us</h2>
              <br/><br/>
            </div>
          </div>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="6">
              <p>
              LoveActually.me is one of the first platforms for people with disabilities to make 
              friends and grow their professional network.
              We are on online and offline initiative working for PWD. LoveActually.me works with the vision of inclusivity and equality.
              We are driven to innovate something exciting to serve the community better.   
              </p>
              <br />
             
            </Col>
          </Row>
          <br />
          <div className="nav-tabs-navigation">
            <div className="nav-tabs-wrapper">
              <Nav role="tablist" tabs>
                <NavItem>
                  <NavLink
                    className={activeTab === "1" ? "active" : ""}
                    onClick={() => {
                      toggle("1");
                    }}
                  >
                    Follows
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={activeTab === "2" ? "active" : ""}
                    onClick={() => {
                      toggle("2");
                    }}
                  >
                    Advisor & Mentor
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
          </div>
          {/* Tab panes */}
          <TabContent className="following" activeTab={activeTab}>
            <TabPane tabId="1" id="follows">
              <Row>
                <Col className="ml-auto mr-auto" md="6">
                  <ul className="list-unstyled follows">
                    <li>
                      <Row>
                        <Col className="ml-auto mr-auto" lg="2" md="4" xs="4">
                          <img
                            alt="..."
                            className="img-circle img-no-padding img-responsive"
                            src={require("assets/img/faces/clem-onojeghuo-2.jpg")}
                          />
                        </Col>
                        <Col className="ml-auto mr-auto" lg="7" md="4" xs="4">
                          <h6>
                          Tanushree Sharma<br />
                            <small>Executioner</small>
                          </h6>
                        </Col>
                        <Col className="ml-auto mr-auto" lg="3" md="4" xs="4">
                        <Button
                        className="btn-just-icon btn-neutral ml-1"
            
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                      <i className="fa fa-facebook-square" />
                      </Button>
                      <Button
                      className="btn-just-icon btn-neutral ml-1"
          
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className="fa fa-linkedin" />
                    </Button>
                        </Col>
                      </Row>
                    </li>
                    <hr />
                    <li>
                    <Row>
                      <Col className="ml-auto mr-auto" lg="2" md="4" xs="4">
                        <img
                          alt="..."
                          className="img-circle img-no-padding img-responsive"
                          src={require("assets/img/faces/clem-onojeghuo-2.jpg")}
                        />
                      </Col>
                      <Col className="ml-auto mr-auto" lg="7" md="4" xs="4">
                        <h6>
                        Rajneesh Sharma<br />
                          <small>Think Tank</small>
                        </h6>
                      </Col>
                      <Col className="ml-auto mr-auto" lg="3" md="4" xs="4">
                      <Button
                      className="btn-just-icon btn-neutral ml-1"
          
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                    >
                    <i className="fa fa-facebook-square" />
                    </Button>
                    <Button
                    className="btn-just-icon btn-neutral ml-1"
        
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fa fa-linkedin" />
                  </Button>
                      </Col>
                    </Row>
                  </li>
                  <hr/>
                  <li>
                  <Row>
                    <Col className="ml-auto mr-auto" lg="2" md="4" xs="4">
                      <img
                        alt="..."
                        className="img-circle img-no-padding img-responsive"
                        src={require("assets/img/faces/clem-onojeghuo-2.jpg")}
                      />
                    </Col>
                    <Col className="ml-auto mr-auto" lg="7" md="4" xs="4">
                      <h6>
                      Krishna Parulekar<br />
                        <small>Tribe</small>
                      </h6>
                    </Col>
                    <Col className="ml-auto mr-auto" lg="3" md="4" xs="4">
                    <Button
                    className="btn-just-icon btn-neutral ml-1"
        
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                  <i className="fa fa-facebook-square" />
                  </Button>
                  <Button
                  className="btn-just-icon btn-neutral ml-1"
      
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  <i className="fa fa-linkedin" />
                </Button>
                    </Col>
                  </Row>
                </li>
                <hr/>
                <li>
                <Row>
                  <Col className="ml-auto mr-auto" lg="2" md="4" xs="4">
                    <img
                      alt="..."
                      className="img-circle img-no-padding img-responsive"
                      src={require("assets/img/faces/clem-onojeghuo-2.jpg")}
                    />
                  </Col>
                  <Col className="ml-auto mr-auto" lg="7" md="4" xs="4">
                    <h6>
                    Vaibhav Padhye<br />
                      <small>Tribe Hunter</small>
                    </h6>
                  </Col>
                  <Col className="ml-auto mr-auto" lg="3" md="4" xs="4">
                  <Button
                  className="btn-just-icon btn-neutral ml-1"
      
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                <i className="fa fa-facebook-square" />
                </Button>
                <Button
                className="btn-just-icon btn-neutral ml-1"
    
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
                <i className="fa fa-linkedin" />
              </Button>
                  </Col>
                </Row>
              </li>
              <hr/>
              <li>
              <Row>
                <Col className="ml-auto mr-auto" lg="2" md="4" xs="4">
                  <img
                    alt="..."
                    className="img-circle img-no-padding img-responsive"
                    src={require("assets/img/faces/clem-onojeghuo-2.jpg")}
                  />
                </Col>
                <Col className="ml-auto mr-auto" lg="7" md="4" xs="4">
                  <h6>
                  Anjali Gulati <br />
                    <small>Tribe Hunter</small>
                  </h6>
                </Col>
                <Col className="ml-auto mr-auto" lg="3" md="4" xs="4">
                <Button
                className="btn-just-icon btn-neutral ml-1"
    
                href="#pablo"
                onClick={(e) => e.preventDefault()}
              >
              <i className="fa fa-facebook-square" />
              </Button>
              <Button
              className="btn-just-icon btn-neutral ml-1"
  
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              <i className="fa fa-linkedin" />
            </Button>
                </Col>
              </Row>
            </li>
            <hr/>
            <li>
            <Row>
              <Col className="ml-auto mr-auto" lg="2" md="4" xs="4">
                <img
                  alt="..."
                  className="img-circle img-no-padding img-responsive"
                  src={require("assets/img/faces/clem-onojeghuo-2.jpg")}
                />
              </Col>
              <Col className="ml-auto mr-auto" lg="7" md="4" xs="4">
                <h6>
                Pranay Makhija<br />
                  <small>Tribe Hunter - International</small>
                </h6>
              </Col>
              <Col className="ml-auto mr-auto" lg="3" md="4" xs="4">
              <Button
              className="btn-just-icon btn-neutral ml-1"
  
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
            <i className="fa fa-facebook-square" />
            </Button>
            <Button
            className="btn-just-icon btn-neutral ml-1"

            href="#pablo"
            onClick={(e) => e.preventDefault()}
          >
            <i className="fa fa-linkedin" />
          </Button>
              </Col>
            </Row>
          </li>
          <hr/>
          <li>
          <Row>
            <Col className="ml-auto mr-auto" lg="2" md="4" xs="4">
              <img
                alt="..."
                className="img-circle img-no-padding img-responsive"
                src={require("assets/img/faces/clem-onojeghuo-2.jpg")}
              />
            </Col>
            <Col className="ml-auto mr-auto" lg="7" md="4" xs="4">
              <h6>
              Anu Chouhan<br />
                <small>Poster Girl</small>
              </h6>
            </Col>
            <Col className="ml-auto mr-auto" lg="3" md="4" xs="4">
            <Button
            className="btn-just-icon btn-neutral ml-1"

            href="#pablo"
            onClick={(e) => e.preventDefault()}
          >
          <i className="fa fa-facebook-square" />
          </Button>
          <Button
          className="btn-just-icon btn-neutral ml-1"

          href="#pablo"
          onClick={(e) => e.preventDefault()}
        >
          <i className="fa fa-linkedin" />
        </Button>
            </Col>
          </Row>
        </li>
        <hr/>
              
                  </ul>
                </Col>
              </Row>
            </TabPane>
            <TabPane className="text-center" tabId="2" id="following">
            
            <ul className="list-unstyled follows">
            <li>
            <Row>
              <Col className="ml-auto mr-auto" lg="2" md="4" xs="4">
                <img
                  alt="..."
                  className="img-circle img-no-padding img-responsive"
                  src={require("assets/img/faces/kaci-baum-2.jpg")}
                />
              </Col>
              <Col className="ml-auto mr-auto" lg="7" md="4" xs="4">
                <h6>
                Jasmina Khanna<br />
                  <small> (Torch bearer) IT Professional & Social Activist</small>
                </h6>
              </Col>
              <Col className="ml-auto mr-auto" lg="3" md="4" xs="4">
              <Button
              className="btn-just-icon btn-neutral ml-1"
  
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
            <i className="fa fa-facebook-square" />
            </Button>
            <Button
            className="btn-just-icon btn-neutral ml-1"

            href="#pablo"
            onClick={(e) => e.preventDefault()}
          >
            <i className="fa fa-linkedin" />
          </Button>
              </Col>
            </Row>
          </li>
          <hr/>
          <li>
            <Row>
              <Col className="ml-auto mr-auto" lg="2" md="4" xs="4">
                <img
                  alt="..."
                  className="img-circle img-no-padding img-responsive"
                  src={require("assets/img/faces/kaci-baum-2.jpg")}
                />
              </Col>
              <Col className="ml-auto mr-auto" lg="7" md="4" xs="4">
                <h6>
                Dr. Huzaifa Khorakiwala <br />
                  <small>Chariman Wockhardt Foundation</small>
                </h6>
              </Col>
              <Col className="ml-auto mr-auto" lg="3" md="4" xs="4">
              <Button
              className="btn-just-icon btn-neutral ml-1"
  
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
            <i className="fa fa-facebook-square" />
            </Button>
            <Button
            className="btn-just-icon btn-neutral ml-1"

            href="#pablo"
            onClick={(e) => e.preventDefault()}
          >
            <i className="fa fa-linkedin" />
          </Button>
              </Col>
            </Row>
          </li><hr/>
          <li>
            <Row>
              <Col className="ml-auto mr-auto" lg="2" md="4" xs="4">
                <img
                  alt="..."
                  className="img-circle img-no-padding img-responsive"
                  src={require("assets/img/faces/kaci-baum-2.jpg")}
                />
              </Col>
              <Col className="ml-auto mr-auto" lg="7" md="4" xs="4">
                <h6>
                Rajnikant Patel<br />
                  <small>Ex MD & CEO - BSE and ICE</small>
                </h6>
              </Col>
              <Col className="ml-auto mr-auto" lg="3" md="4" xs="4">
              <Button
              className="btn-just-icon btn-neutral ml-1"
  
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
            <i className="fa fa-facebook-square" />
            </Button>
            <Button
            className="btn-just-icon btn-neutral ml-1"

            href="#pablo"
            onClick={(e) => e.preventDefault()}
          >
            <i className="fa fa-linkedin" />
          </Button>
              </Col>
            </Row>
          </li>
          </ul>
            </TabPane>
          </TabContent>
        </Container>
      </div>
      <DemoFooter />
    </>
  );
}

export default ProfilePage;
