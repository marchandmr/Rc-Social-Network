import React from "react";

function Jumbotron({ children }) {
    return (
        <div
            style={{ background: "#003566", color: "white", height: 300, paddingTop: 120, textAlign: "center" }}
            className="jumbotron"
        >
            {children}
        </div>
    );
}

export default Jumbotron;