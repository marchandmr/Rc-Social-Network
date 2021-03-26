import React from "react"

function SignIn() {

    return (
        <div>
            <h1>RC Spots</h1>
            <div className="">
                <h2>Sign In</h2>
                <form className="signInForm">
                    <fieldset>
                        <label>
                            <p>Email: </p>
                            <input name="name" />
                        </label>
                        <label>
                            <p>Password:</p>
                            <input name="password" />
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