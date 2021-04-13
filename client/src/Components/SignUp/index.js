import React, { useState } from "react"
import API from "../../utils/API"
import "./signup.css"
import SignupJumbotron from "../SignupJumbotron"
import Footer from "../Footer";
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"

function SignUp() {

    const [email, setEmail] = useState([])
    const [password, setPassword] = useState([])
    const [username, setUsername] = useState([])

    function handleSignUp(e) {
        e.preventDefault();

        if (email === "" || username === "" || password === "") {
            alert("Not all fields filled out, please check your inputs")
            return
        }

        API.signup({
            username: username,
            email: email,
            password: password
        }).then(response => {
            if (response.data) {
                alert("Sign Up Successful")
                window.location.href = "/"
            }
        }).catch(error => {
            console.log("Error: ", error)
        })

    }

    function handleEmailInput(event) {
        setEmail(event.target.value)
    }

    function handlePasswordInput(event) {
        setPassword(event.target.value)
    }

    function handleUsernameInput(event) {
        setUsername(event.target.value)
    }

    return (
        <div>
            <SignupJumbotron />
            <Container className="signupContainer">


                <div className="">
                    <h2 className="signup">Sign Up</h2>
                    <form className="signInForm">

                        <fieldset>
                            <Row>
                                <Col>
                                    <label>
                                        <p className="signup">Username: </p>
                                        <input
                                            onChange={handleUsernameInput}
                                            name="username" />
                                    </label>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <label>
                                        <p className="signup">Email: </p>
                                        <input
                                            onChange={handleEmailInput}
                                            name="email" />
                                    </label>
                                </Col>
                            </Row>
                            <label>
                                <p className="signup">Password:</p>
                                <input
                                    onChange={handlePasswordInput}
                                    name="password"
                                    type="password"
                                />
                            </label>
                        </fieldset>
                    </form>
                </div>
                <div>
                    <Button
                        onClick={handleSignUp}>Submit</Button>
                    <br>
                    </br>
                    <br>
                    </br>
                    <a href="/">Already have an account?</a>
                </div>
            </Container>
            <Footer />
        </div>
    )
}

export default SignUp;