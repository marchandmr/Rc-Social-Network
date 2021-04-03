import React, { useState } from "react"
import API from "../../utils/API"

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
            <h1>RC Spots</h1>
            <div className="">
                <h2>Sign In</h2>
                <form className="signInForm">
                    <fieldset>
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
                        <button
                            onClick={handleSignIn}
                            type="submit">Submit</button>
                    </fieldset>
                </form>
            </div>
            <div>
                <button onClick={(e) => {
                    e.preventDefault();
                    window.location.href = "/SignUp"
                }}
                    id="switchToSignUpBtn">Sign Up Here!
                    </button>
            </div>
        </div>
    )
}

export default SignIn;