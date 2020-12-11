
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
              
            </div>
          </div>
          <Row>
          <Col className="ml-auto mr-auto text-center" md="8">
          <h5>
           
LoveActually.me is one of the first platforms for people with disabilities to make friends  and grow their professional network.We are on online and offline initiative working for PWD. LoveActually.me works with the vision of inclusivity and equality.We are driven to innovate  something exciting to serve the community better
          </h5>
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
                    Crew
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={activeTab === "2" ? "active" : ""}
                    onClick={() => {
                      toggle("2");
                    }}
                  >
                    Coach & Mentor
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
                            src={require("assets/img/faces/LA/Tanushree Sharma.jpg")}
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
                       
                        href="https://www.facebook.com/tanushree.r.sharma"
                        
                      >
                      <i className="fa fa-facebook-square" />
                      </Button>
                      <Button
                      className="btn-just-icon btn-neutral ml-1"
          
                      href="https://www.linkedin.com/in/tanushree-r-sharma/"
                     
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
                          src={require("assets/img/faces/LA/Rajneesh Sharma.jpg")}
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
          
                      href="https://www.facebook.com/therajneeshsharma"
                     
                    >
                    <i className="fa fa-facebook-square" />
                    </Button>
                    <Button
                    className="btn-just-icon btn-neutral ml-1"
        
                    href="https://www.linkedin.com/in/therajneeshsharma/"
                   
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
                        src={require("assets/img/faces/LA/Krishna Parulekar.png")}
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
        
                    href="https://www.facebook.com/krishna.parulekar.9"
             
                  >
                  <i className="fa fa-facebook-square" />
                  </Button>
                  <Button
                  className="btn-just-icon btn-neutral ml-1"
      
                  href="https://www.linkedin.com/in/krishna-parulekar-816b007/"
              
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
                      src={require("assets/img/faces/LA/Shagun Pathak.jpg")}
                    />
                  </Col>
                  <Col className="ml-auto mr-auto" lg="7" md="4" xs="4">
                    <h6>
                    Shagun Pathak<br />
                      <small>Tribe</small>
                    </h6>
                  </Col>
                  <Col className="ml-auto mr-auto" lg="3" md="4" xs="4">
                  <Button
                  className="btn-just-icon btn-neutral ml-1"
      
                  href="https://www.facebook.com/shagun.pathak1"
           
                >
                <i className="fa fa-facebook-square" />
                </Button>
                <Button
                className="btn-just-icon btn-neutral ml-1"
    
                href=" https://www.linkedin.com/in/shagun-pathak-90757245"
            
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
                      src={require("assets/img/faces/LA/Vaibhav Padhye.jpg")}
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
      
                  href="https://www.facebook.com/vaibhavvpadhye1"
                
                >
                <i className="fa fa-facebook-square" />
                </Button>
                <Button
                className="btn-just-icon btn-neutral ml-1"
    
                href="https://www.linkedin.com/in/vaibhav-padhye-2835b8189/"
               
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
                    src={require("assets/img/faces/female.jpg")}
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
    
                href="https://www.facebook.com/anjali.gulati.58"
               
              >
              <i className="fa fa-facebook-square" />
              </Button>
              <Button
              className="btn-just-icon btn-neutral ml-1"
  
              href="https://www.linkedin.com/in/anjali-gulati-1554421b1/"
            
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
                  src={require("assets/img/faces/male.jpg")}
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
  
              href="https://www.facebook.com/pranay.makhija.71"
          
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
                src={require("assets/img/faces/LA/Geeta Chouhan.jpg")}
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

            href="https://www.facebook.com/anu.chouhan.12"
        
          >
          <i className="fa fa-facebook-square" />
          </Button>
          <Button
          className="btn-just-icon btn-neutral ml-1"

          href="https://www.linkedin.com/in/geet-anu-chouhan-b92aa618b/"
    
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
                  src={require("assets/img/faces/female.jpg")}
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
  
              href="https://www.facebook.com/jasmina.khanna"
             
            >
            <i className="fa fa-facebook-square" />
            </Button>
            <Button
            className="btn-just-icon btn-neutral ml-1"

            href="https://www.linkedin.com/in/jasmina-khanna-1992157/"
          
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
                  src={require("assets/img/faces/LA/Huzaifa Khorakiwala.jpg")}
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
  
              href="https://www.facebook.com/huzaifa.khorakiwala"
            
            >
            <i className="fa fa-facebook-square" />
            </Button>
            <Button
            className="btn-just-icon btn-neutral ml-1"

            href="https://www.linkedin.com/in/huzaifakhorakiwala/"
        
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
                  src={require("assets/img/faces/LA/Rajnikant Patel.jpg")}
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
  
              href="https://www.facebook.com/rajnickant.patel.1420"
             
            >
            <i className="fa fa-facebook-square" />
            </Button>
            <Button
            className="btn-just-icon btn-neutral ml-1"

            href="https://www.linkedin.com/in/rajnickantpatel/"
           
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
     
    </>
  );
}

export default ProfilePage;
