import React, { useEffect } from "react"
import Navbar from 'react-bootstrap/Navbar';
import UserBody from "../UserBody";

function UserProfile(){

    useEffect(() => {
        let username = localStorage.getItem("currentUsername")

        // axios to get user info
    }, [])

    return(
        <div>
        <Navbar bg="primary" variant="dark" fixed="top">
        <Navbar.Brand href="/Home" className="navTitle"><i className="fas fa-truck-pickup"></i>  RC Spots</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
                Signed in as: <a href="/Profile">{localStorage.getItem("currentUsername")}</a>                  
            </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
            <UserBody/>
        </div>
    )
}

export default UserProfile