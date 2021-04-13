import React, { useState } from "react"
import "./404.css"
import SignupJumbotron from "../SignupJumbotron"
import Footer from "../Footer";
import Container from "react-bootstrap/Container"

function Error404() {


    return (
        <div>
            <SignupJumbotron />
            <Container className="lettering">


                <div className="">
                    <h2 className="lettering">Error 404</h2>
                    <h3>Looks like you bashed your RC car a little too hard!</h3>
                    <hr></hr>
                    <h4>Click the back button in your browser to go back to RC Spots!</h4>
                </div>
                <div>
                   <img src="./carfire.jpg"/>
                    
                </div>
            </Container>
            <Footer />
        </div>
    )
}

export default Error404;