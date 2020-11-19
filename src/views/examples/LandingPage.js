
import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  UncontrolledCollapse,
 
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

function LandingPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  return (
    <>
      <ExamplesNavbar />
      <LandingPageHeader />
      <div className="main">
        <div className="section text-center">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="title">Let's talk </h2>
                <h5 className="description">
                We at LoveActually.Me are working persistently to give a safe environment to get mentored, inspired, and be independent by meeting the right fit.
                </h5>
                <UncontrolledCollapse toggler="#toggler">
                <h5 className="description">
                We are an ONLINE and OFFLINE community designed to ENABLE and EMPOWER 
                people who have fallen out of the mainstream (PWD’s) to CONNECT, MEET
                and GROW. Love Actually is a vehicle for PWD’s to foster social inclusion,
                a sense of belonging, and provide an opportunity to lead a fulfilling like 
                by exploring their talents and meet life-long friends.
     Love Actually is a salute to everyday bravery they exhibit and immense love they 
    want to share.  
                    </h5>
              </UncontrolledCollapse>
                <br />
                <Button
                  className="btn-round"
                  color="info"
                  id="toggler" 
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  See Details
                </Button>
               
              </Col>
            </Row>
            <br />
            <br />
            <Row>
              <Col md="4">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-album-2" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Meet</h4>
                    <p className="description">
                      
LoveActuallyMe is a
platform to connect with
people who share the same
likings, thoughts and
ideologies on social and
professional front.

                    </p>
                    <UncontrolledCollapse toggler="#meet">
                    <p className="description">
                    Our online platform helps
you find people near you or
the ones you can connect
instantly. 
                        </p>
                  </UncontrolledCollapse>
                    <Button className="btn-link" id="meet" color="info" href="#pablo">
                      See more
                    </Button>
                  </div>
                </div>
              </Col>
              <Col md="4">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-bulb-63" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Initative</h4>
                    <p>
                    Our online initiative will help
                    able and PWDs to meet,
                    connect with like minded
                    individuals.
                    </p>
                    <UncontrolledCollapse toggler="#initative">
                    <p className="description">
                    Also, LoveActuallyMe events
are designed to encourage
networking, learning, and
encouraging while making new friends.
                        </p>
                  </UncontrolledCollapse>
                    <Button className="btn-link" id="initative" color="info" href="#pablo">
                      See more
                    </Button>
                  </div>
                </div>
              </Col>
              <Col md="4">
                <div className="info">
                  <div className="icon icon-info">
                    <i className="nc-icon nc-chart-bar-32" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Network</h4>
                    <p>
                    What happens when you meet people who are alike, who like you and who want to move ahead? You either find yourself or find the Love of your life a good deal either way.
                    </p>
                    <UncontrolledCollapse toggler="#network">
                    <p className="description">
                    LoveActuallyMe interactions
                    are designed to ensure that
                    people who like the same
                    things meet and grow
                    together.
                        </p>
                  </UncontrolledCollapse>
                    <Button className="btn-link" id="network" color="info" href="#pablo">
                      See more
                    </Button>
                  </div>
                </div>
              </Col>
          
            </Row>
          </Container>
        </div>
        <div className="section section-dark text-center">
          <Container>
            <h2 className="title">Testimony</h2>
            <Row>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/faces/clem-onojeghuo-3.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Henry Ford</CardTitle>
                        
                      </div>
                    </a>
                    <p className="card-description text-center">
                      This have been a boon to me , absolutely amazing.
                    </p>
                  </CardBody>
                  
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/faces/joe-gardner-2.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Sophie West</CardTitle>
                        
                      </div>
                    </a>
                    <p className="card-description text-center">
                      A really nice idea.
                    </p>
                  </CardBody>
            
                </Card>
              </Col>
              <Col md="4">
                <Card className="card-profile card-plain">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        src={require("assets/img/faces/erik-lucatero-2.jpg")}
                      />
                    </a>
                  </div>
                  <CardBody>
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <div className="author">
                        <CardTitle tag="h4">Robert Orben</CardTitle>
                        
                      </div>
                    </a>
                    <p className="card-description text-center">
                     I love this platform.
                    </p>
                  </CardBody>
                  
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        
      </div>
      <DemoFooter />
    </>
  );
}

export default LandingPage;
