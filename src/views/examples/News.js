import React from 'react'
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import { Card, CardBody, CardTitle, CardLink, Button } from 'reactstrap';

const News = () => {
    return (
        <>
            <ExamplesNavbar/>
            <div  className="page-header"
            style={{
              backgroundImage: "url(" + require("assets/img/login-image.jpg") + ")",
            }}>
          <h1 className="title">News</h1>
          </div>
          <br/><br/><br/>
            <Card>
           <CardBody>
           <CardLink href="https://newzhook.com/story/20410/">
           https://newzhook.com/story/20410/
           </CardLink>
           </CardBody>
                 </Card>
               <Card>
          <CardBody>
          <CardLink href="http://corporateinsight.in/archives/56">
          http://corporateinsight.in/archives/56
          </CardLink>
          </CardBody>
         </Card>
           <Card>
           <CardBody>
           <CardLink href=" https://www.startocure.com/interview/interview with tanushree sharma loveactually me/">
           https://www.startocure.com/interview/interview with tanushree sharma loveactually me/
           </CardLink>
           </CardBody>
           </Card>
           <Card>
           <CardBody>
           <CardLink href="https://yourstory.com/hindi/loveactuallyme-pwd-community-matchmaking-app">
           https://yourstory.com/hindi/loveactuallyme-pwd-community-matchmaking-app
           </CardLink>
           </CardBody>
           </Card>
           <Card>
           <CardBody>
           <CardLink href="https://sociostory.org/impact-stories/a-platform-for-people-with-disabilities-to-be-out-and-about">
           https://sociostory.org/impact-stories/a-platform-for-people-with-disabilities-to-be-out-and-about
           </CardLink>
           </CardBody>
           </Card>
        
         <DemoFooter/>
        </>
    )
}

export default News
