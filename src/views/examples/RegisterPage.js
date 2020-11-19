
import React from "react";

// reactstrap components
import {   Card,  CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody,Row, Container } from "reactstrap";

// core components
import DemoFooter from "components/Footers/DemoFooter.js";
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";

function RegisterPage() {
 
 
  return (
    <>
      <ExamplesNavbar />
      <div
        className="page-header"
        style={{
          backgroundImage: "url(" + require("assets/img/federico-beccari.jpg") + ")",
        }}
      >
        <div className="filter" />
        <Container>
        <br/><br/><br/><br/><br/><br/>
        <h1 className="title"><strong>Events</strong></h1><br/>
          <Row>
          <CardDeck>
          <Card>
            
            <CardBody>
              <CardTitle tag="h5">iGNiTE </CardTitle>
              <br/>
              <CardText>It is our signature activity where we push inclusivity by pulling together able and disabled people and exhibit the best skills in performing arts.It is an activity by PWDs for PWDs, the idea is to bring a new perspective among able people when they encounter PWDs.</CardText>
            
            </CardBody>
          </Card>
          <Card>
           
            <CardBody>
              <CardTitle tag="h5">iGNiTE 1.0</CardTitle>
              <br/>
              <CardText>First offline activity, an evening with PWDs in Delhi during Diwali 2019, where talented disabled performers gave a glimpse of their talent in an open environment and shared the stage with able performers More than 3k+ crowd cheering for them was an overwhelming experience. Impact - People started knowing the performers, one started her podcast, and a few gained more recognition </CardText>
             
            </CardBody>
          </Card>
          <Card>
            
            <CardBody>
              <CardTitle tag="h5">iGNiTE 2.0</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">Summer Edition</CardSubtitle>
              <CardText>The summer edition we did was online on Instagram live, last for three days in June'19. It allowed us to bring talented performers from different nooks and corners of India.  It was one of its kind of online events focusing on disabled people, and all three days witnessed 8k+ people watching and encouraging these talented superstars. We had influencers like Rakshanda Khan, Ansha Sayed, and Kamlesh Patel.</CardText>
              
            </CardBody>
          </Card>
          <Card>
           
          <CardBody>
            <CardTitle tag="h5">iGNiTE 3.0</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">Winter Edition</CardSubtitle><br/>
            <CardText>Upcoming</CardText>
           
          </CardBody>
        </Card>
        
        </CardDeck>
          </Row>
          <br/><br/>
        </Container>
       
      </div>
      <DemoFooter/>
    </>
  );
}

export default RegisterPage;
