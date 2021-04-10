import React from "react";
import './signupJumbo.css'
function SignupJumbotron({ children }) {
    return (
        <div
            style={{ background: "#003566", color: "white", height: 250, paddingTop: 120, textAlign: "center" }}
            className="jumbotron"
        >
            <h1 className="jumboHead">RC Spots </h1>
        </div>
    );
}

export default SignupJumbotron;