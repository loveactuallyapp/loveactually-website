
import React , { useState } from "react";

// reactstrap components
import {   Card,  CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody,Row, Container, Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption } from "reactstrap";

// core components

import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";




//function carosel
const items = [
  {src:
    "/iGNiTE 1/picb.jpg",
       altText: "Slide 1",
     caption: ""
   },
   {src:
   "/iGNiTE 1/9.jpg",
       altText: "Slide 2",
     caption: ""
   },
   {src:
     "/iGNiTE 1/7.jpg",
         altText: "Slide 3",
       caption: ""
     },
     {src:
       "/iGNiTE 1/pica.jpg",
           altText: "Slide 4",
         caption: ""
       },
       {src:
         "/iGNiTE 1/8.jpg",
             altText: "Slide 5",
           caption: ""
         },
         {src:
           "/iGNiTE 1/picc.jpg",
               altText: "Slide 6",
             caption: ""
           },
           {src:
             "/iGNiTE 1/picd.jpg",
                 altText: "Slide 7",
               caption: ""
             },
             {src:
               "/iGNiTE 1/pice.jpg",
                   altText: "Slide 8",
                 caption: ""
               },
               {src:
                 "/iGNiTE 1/picf.jpg",
                     altText: "Slide 9",
                   caption: ""
                 },
];




function RegisterPage() {
 
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });
  return (
    <>
      <ExamplesNavbar />
      <div
     
      style={{
        backgroundImage: "url(" + require("assets/img/login-image.jpg") + ")",
      }}
      >
      <Carousel
          activeIndex={activeIndex}
          next={next}
          previous={previous}
        >
          <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
     
      </div>
        <div className="filter" />
        <Container>
        <br/><br/>
        
        <br/><br/><br/><br/>
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
       
      
   
    </>
  );
}

export default RegisterPage;
