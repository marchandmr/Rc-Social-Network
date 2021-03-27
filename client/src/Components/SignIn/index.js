import React, { useState } from "react"

function SignIn() {

    const [email, setEmail] = useState([])
    const [password, setPassword] = useState([])

    function handleEmailInput(event){
        setEmail(event.target.value)
    }

    function handlePasswordInput(event) {
        setPassword(event.target.value)
        
    }

    function handleSignIn(event) {
        event.preventDefault()
        console.log(email)
        console.log(password)

        // send information to server with passport and switch 
        // somehow with userid data?

        // for now just switch pages to continue working
        window.location.href="/Home"
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
                    id="switchToSignUpBtn">Sign Up!
                    </button>
            </div>
        </div>
    )
}

export default SignIn;