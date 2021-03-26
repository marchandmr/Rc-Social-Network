import React from "react"

function SignUp() {

    function handleSignUp(e) {
        e.preventDefault();
        console.log("Submit!")

        // send info to database
        window.location.href = "/"
    }

    return (
        <div>
            <h1>RC Spots</h1>
            <div className="">
                <h2>Sign Up</h2>
                <form className="signInForm">
                    <fieldset>
                        {/* add username and something (ask) */}
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
                <button onClick={handleSignUp}>Submit</button>
            </div>
        </div>
    )
}

export default SignUp;