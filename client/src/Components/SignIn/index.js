import React, { useState } from "react"
import API from "../../utils/API"
import Jumbotron from "react-bootstrap/Jumbotron"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"


function SignIn(props) {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function handleEmailInput(event) {
        setEmail(event.target.value)
    }

    function handlePasswordInput(event) {
        setPassword(event.target.value)

    }

    function handleSignIn(event) {
        event.preventDefault()
        console.log(email)
        console.log(password)


        if (email === "" || password === "") {
            alert("Not all fields filled out, please check your inputs")
            return
        }

        // send information to server with passport and switch 
        // somehow with userid data?
        // dont forget to add username from login response

        API.login(email, password)
            .then(response => {
                if (response.status === 200) {
                    console.log(response.data)
                    window.location.href = "/Home"
                }

            }).catch(e => {
                console.log("Error: ", e)
            })

        // local storage call
        props.update(email)

    }

    return (
        <div>
            {/* <Container fluid> */}

            <Row className="RowTest" noGutters={true}>

                <Col className="leftSide" sm={8} noGutters={true}>


                    {/* <Image className="mainImage" src={Picture2} fluid/> */}

                </Col>


                <Col className="rightSide" sm={4} noGutters={true}>


                    <Jumbotron className="jumbo" fluid={true} nogutters="true">
                        <h1 className="mainHeader">RC Spots</h1>
                    </Jumbotron>

                    <div className="signIn">
                        <h2 className="loginTitle">Sign In</h2>
                        <form className="signInForm">
                            <fieldset>
                                <label>
                                    <p className="loginSmallTitle">Email: </p>
                                    <input
                                        onChange={handleEmailInput}
                                        name="email" />
                                </label>
                                <br />
                                <label>
                                    <p className="loginSmallTitle">Password:</p>
                                    <input
                                        onChange={handlePasswordInput}
                                        name="password"
                                        type="password"
                                    />
                                </label>
                                <br />
                                <button
                                    onClick={handleSignIn}
                                    type="submit">Submit</button>
                                <br></br>
                                <br></br>
                                <a href="/SignUp">Sign up Here!</a>
                            </fieldset>
                        </form>
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <div>
                        {/* <button onClick={(e) => {
                            e.preventDefault();
                            window.location.href = "/SignUp"
                        }}
                            id="switchToSignUpBtn">Sign Up Here!
                    </button> */}
                    </div>
                </Col>
            </Row>
            {/* </Container> */}
        </div>
    )
}

export default SignIn;