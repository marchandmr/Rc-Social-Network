import React, { useState } from "react"

function SignIn() {

    const [formObject, setFormObject] = useState([]);

    const [email, setEmail] = useState([])
    const [password, setPassword] = useState([])

    function handleEmailInput(event){
        setEmail(event.target.value)
    }

    function handlePasswordInput(event) {
        setPassword(event.target.value)
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
                            <input name="email" />
                        </label>
                        <label>
                            <p>Password:</p>
                            <input name="password" 
                            type="password"
                            />
                        </label>
                        <button type="submit">Submit</button>
                    </fieldset>
                </form>
            </div>
            <div>
                <button onClick={(e) => {
                    e.preventDefault();
                    window.location.href = "/SignUp"
                }}
                    id="switchToSignUpBtn">Sign Up!
                    </button>
            </div>
        </div>
    )
}

export default SignIn;