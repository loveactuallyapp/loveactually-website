
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
  Col,Card, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";


function Blog() {
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
     <div className="page-header" style={{
      backgroundImage: "url(" + require("assets/img/pexels-văn-thắng-1415131.jpg") + ")", 
    }}> <h1 className="title" ><strong>Blog</strong></h1></div>
      <div className="section " >
        <Container>
          
          <Row>
          <Col className="ml-auto mr-auto text-center" md="8">
          <h5>
           
LoveActually.me is one of the first platforms for people with disabilities to make friends  and grow their network.We are on online and offline initiative working for PWD. We are driven to innovate  something exciting to serve the community better
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
                  <Button className="btn-round" color="primary">
                    Chemisty
                    </Button>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={activeTab === "2" ? "active" : ""}
                    onClick={() => {
                      toggle("2");
                    }}
                  >
                  <Button className="btn-round" color="warning">
                    online Dating
                    </Button>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={activeTab === "3" ? "active" : ""}
                    onClick={() => {
                      toggle("3");
                    }}
                  >
                  <Button className="btn-round" color="danger">
                    First Date
                    </Button>
                  </NavLink>
                </NavItem>
              </Nav>
            </div>
          </div>
          {/* Tab panes */}
          <TabContent  activeTab={activeTab}>
            <TabPane tabId="1" id="follows">
            <CardDeck>
            <Card >
              <CardImg top  src="/blog/pexels-jaspereology-3441119.jpg" alt="...." />
              <CardBody>
                <CardTitle tag="h5">Compatibility and Chemistry in Relationships</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">Having chemistry in relationships and being compatible with someone are not always the same thing.</CardSubtitle>
                <CardText>Dating advice mostly ignores diving into compatibility and chemistry because they can’t be faked or changed. These ideas are there or they are not.</CardText>
                <Button href="https://markmanson.net/compatibility-and-chemistry">Read</Button>
              </CardBody>
            </Card>
            <Card>
              <CardImg top width="100%" src="/blog/pexels-pixabay-414032.jpg" alt="..." />
              <CardBody>
                <CardTitle tag="h5">How To Build Chemistry In a Relationship – A Relationship Expert Reveals Exactly What To Do</CardTitle>
                
                <CardText>“Intimacy transcends the physical. It is a feeling of closeness that isn’t about proximity, but of belonging. It is a beautiful emotional space in which two become one.”</CardText>
                <Button href="https://deepsoulfullove.com/how-to-build-chemistry-in-a-relationship/">Read</Button>
              </CardBody>
            </Card>
            <Card>
              <CardImg top width="100%" src="/blog/pexels-pixabay-236287.jpg" alt="loading" />
              <CardBody>
                <CardTitle tag="h5">Can You Actually Develop Chemistry Or Does It Need To Be There From The Start?</CardTitle>
               
                <CardText>You want to experience those electrifying sparks when you first meet someone — hey, you deserve it — but what if the chemistry needs a bit of work even though he ticks all your other boxes?</CardText>
                <Button href="https://www.bolde.com/can-you-actually-develop-chemistry/">Read</Button>
              </CardBody>
            </Card>
          </CardDeck>
            </TabPane>
            <TabPane className="text-center" tabId="2" id="following">
 
            <CardDeck>
            <Card>
            <CardImg top width="100%" src="/blog/friends-1149841_1280.jpg" alt="loading" />
            <CardBody>
              <CardTitle tag="h5">The Good Part of Online Dating</CardTitle>
             
              <CardText>Which is to say that online dating is a perfect glass-half-empty/glass-half-full situation.</CardText>
              <Button href="https://www.evanmarckatz.com/blog/online-dating-tips-advice/the-good-part-of-online-dating">Read</Button>
            </CardBody>
          </Card>
          <Card>
          <CardImg top width="100%" src="/blog/pexels-andrea-piacquadio-3807769.jpg" alt="loading" />
          <CardBody>
            <CardTitle tag="h5">Do You Know Your Dating Lingo?</CardTitle>
           
            <CardText>Anyone in the world of dating today, especially online and in apps, will tell you that there are a few words you may have to add to your vocabulary.</CardText>
            <Button href="https://www.alittlenudge.com/2020/07/do-you-know-your-dating-lingo/">Read</Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg top width="100%" src="/blog/pexels-samson-katt-5225457.jpg" alt="loading" />
          <CardBody>
            <CardTitle tag="h5">What You Need to Know Before You Try Online Dating</CardTitle>
           
            <CardText>In the quest to find romance, more of us have turned to online dating. Once stigmatized as a venue for the desperate, online dating has become a normal part of the mating game.</CardText>
            <Button href="https://www.psychologytoday.com/us/blog/close-encounters/201407/what-you-need-know-you-try-online-dating">Read</Button>
          </CardBody>
        </Card>
                   </CardDeck>
            </TabPane>
            <TabPane className="text-center" tabId="3" id="following">
 
            <CardDeck>
            <Card>
            <CardImg top width="100%" src="/blog/pexels-the-lazy-artist-gallery-1342609.jpg" alt="loading" />
            <CardBody>
              <CardTitle tag="h5">How to Be a True Gentleman on a First Date</CardTitle>
             
              <CardText>It doesn’t matter if you’ve known your date your entire life or you connected over dating apps, you always want to leave a good impression on a first date. So, what steps should you take to be a true gentleman?</CardText>
              <Button href="https://theurbandater.com/date-ideas/how-to-be-a-true-gentleman-on-a-first-date.php/">Read</Button>
            </CardBody>
          </Card>
          <Card>
            <CardImg top width="100%" src="/blog/pexels-picjumbocom-196651.jpg" alt="loading" />
            <CardBody>
              <CardTitle tag="h5"> Ways To Have An Incredible First Date</CardTitle>
             
              <CardText>Imagine going on 121 dates before stumbling upon the person you wanted to spend forever with, and you have a glimpse of Wendy Newman's life..</CardText>
              <Button href="https://www.self.com/story/16-ways-to-have-an-incredible-first-date">Read</Button>
            </CardBody>
          </Card>
          <Card>
            <CardImg top width="100%" src="/blog/pexels-everton-nobrega-4155352.jpg" alt="loading" />
            <CardBody>
              <CardTitle tag="h5"> Mistakes That Will Tank Your First Date</CardTitle>
             
              <CardText>Going on a first date can feel like walking a tightrope: You’re trying to impress her without coming on too strong—or worse, looking desperate. You want to seem smart but not condescending. Funny but not obnoxious</CardText>
              <Button href="https://www.menshealth.com/sex-women/a19545021/first-date-tips-for-men/">Read</Button>
            </CardBody>
          </Card>
                   </CardDeck>
            </TabPane>
          </TabContent>
        </Container>
      </div>
     
    </>
  );
}

export default Blog;
