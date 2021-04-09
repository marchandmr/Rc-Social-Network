import React, { useEffect } from "react"
import Navbar from 'react-bootstrap/Navbar';
import Jumbotron from 'react-bootstrap/Jumbotron'
import API from "../../utils/API";
import UserBody from "../UserBody";

function UserProfile() {

    useEffect(() => {


        API.findByName({ username: localStorage.getItem("currentUsername") })
            .then((res) => {
                console.log("Data: ", res.data)
            })
            .catch((error) => {
                console.log("Error: ", error)
            })
    }, [])

    return (
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
            <br />
            <br />
            <br />
            <Jumbotron>
            <UserBody />
            </Jumbotron>
        </div>
    )
}

export default UserProfile