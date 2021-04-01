import React, { useState } from "react"
import axios from "axios"
import API from "../../utils/API"

function SignUp() {

    const [email, setEmail] = useState([])
    const [password, setPassword] = useState([])
    const [username, setUsername] = useState([])

    function handleSignUp(e) {
        e.preventDefault();
        console.log("Submit!")

        if (email === "" || username === "" || password === "") {
            alert("Not all fields filled out, please check your inputs")
            return
        }
        // send info to database
        // route to "/user"
        // waiting on scheme and routes to be set up to sign up a user
        // axios post to /user
        // pass username, email AND password
        // .then(response => {if response.data -> successful, go to login, else error})

        API.signup({
            username: username,
            email: email,
            password: password
        }).then(response => {
            if(response.data){
                alert("Sign Up Successful")
                window.location.href="/"
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
            <h1>RC Spots</h1>
            <div className="">
                <h2>Sign Up</h2>
                <form className="signInForm">
                    <fieldset>
                        <label>
                            <p>Username: </p>
                            <input
                                onChange={handleUsernameInput}
                                name="username" />
                        </label>
                        <label>
                            <p>Email: </p>
                            <input
                                onChange={handleEmailInput}
                                name="email" />
                        </label>
                        <label>
                            <p>Password:</p>
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
                <button
                    onClick={handleSignUp}>Submit</button>
            </div>
        </div>
    )
}

export default SignUp;