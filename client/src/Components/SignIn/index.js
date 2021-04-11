import React, { useState } from "react"
import API from "../../utils/API"
import Jumbotron from "react-bootstrap/Jumbotron"
import Anime from "react-anime"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
import Logo from "../../assets/img/logtest4.png"
import { Link } from "react-router-dom"


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
        if (email === "" || password === "") {
            alert("Not all fields filled out, please check your inputs")
            return
        }
        API.login(email, password)
            .then(response => {
                if (response.status === 200) {
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
            <Row className="RowTest" noGutters={true}>
                <Col className="leftSide" sm={8} noGutters={true}> </Col>
                <Col className="rightSide" sm={4} noGutters={true}>
                    {/* <Jumbotron className="jumbo" fluid={true} nogutters="true"> */}
                        {/* <h1 className="mainHeader"></h1> */}
                        <img src={Logo} class="img-fluid" alt="logo"></img>
                        {/* <Anime
                            easing="linear"
                            duration={1800}
                            loop={true}
                            rotate={1100} >
                            <img width="150px" src="./tire.png" />
                        </Anime> */}
                        
                        {/* <h1 className="mainHeader"></h1> */}
                        
                    {/* </Jumbotron> */}
                    <div className="signIn">
                    <Anime
                            easing="linear"
                            duration={1800}
                            loop={true}
                            rotate={1100} >
                            <img width="130px" src="./tire.png" alt="rotating tire"/>
                        </Anime>
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
                                <Button
                                    // size="lg"                                
                                    onClick={handleSignIn}
                                    type="submit">Submit</Button>
                                <br></br>
                                <br></br>

                                {/* <Link to ="/SignUp"><Button variant="success" block>Sign up Here</Button></Link> */}
                                <a href="/SignUp">Sign up Here!</a>
                            </fieldset>
                        </form>
                    </div>
                    <div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default SignIn;