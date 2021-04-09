import React, { useEffect, useState } from "react"
import API from "../../utils/API"
import CreatePostBtn from "../CreatePostBtn"
import CreatePostModal from "../CreatePostModal"
import LogoutButton from "../LogoutButton"
import { PostList, ListItem } from "../PostList"
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


const USERNAME = "currentUsername"
const EMAIL = "currentEmail"


function Home() {

    const [postList, updatePostList] = useState([])
    const [showCreate, updateShowCreate] = useState(false)
    const [loadSwitch, updateLoadSwitch] = useState(false)

    function loadUsername() {
        console.log("Loading username....")
        // axios here....

        API.findUser({
            email: localStorage.getItem(EMAIL)
        })
            .then(res => {
                console.log("RESPONSE: ", res)
                localStorage.setItem(USERNAME, res.data)
                updateLoadSwitch(!loadSwitch)
            })
            .catch(e => {
                console.log(e)
            })
            
    }

    useEffect(() => {

        // load posts with axios here??
        API.getPosts()
            .then(res => {
                console.log("Content loaded")
                console.log(res.data)
                updatePostList(res.data)
            })

    }, [loadSwitch])

    useEffect(() => { loadUsername() }, [])



    function handleCreatePost() {
        // make the modal appear
        updateShowCreate(true)

    }

    function verifyPostInputs(post) {
        if (!post.body || !post.city || !post.state) {
            alert("Please fill out Description, City, and State.")
            return false
        }
        return true
    }

    function handleSubmitPost(postObject) {

        postObject.user_posted = localStorage.getItem("currentUsername")
        postObject.image = localStorage.getItem("imageLink")

        console.log("POSTING WITH THIS INFORMATION: ", postObject)

        // free up local storage
        localStorage.setItem("imageLink", "")
        if (verifyPostInputs(postObject)) {
            // hide modal and bring button back
            updateShowCreate(false)
            // post to the database
            API.createPost(postObject)
                .then(response => {
                    console.log("Response: ", response.data)
                    updateLoadSwitch(!loadSwitch)
                })
                .catch(error => {
                    console.log("**** CREATE POST ERROR ****\n", error)
                    alert("ALERT: ERROR POSTING PLEASE TRY AGAIN")
                })
        } else {
            return
        }
    }

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
            <div className="postPage">
            <br />
            <br />         
            <br />        
            {/* <h1>RC Spots</h1> */}
            {/* <LogoutButton /> */}
            {/* <p>Hello {localStorage.getItem("currentUsername")} </p> */}
            {/* <p>Your email is {localStorage.getItem("currentEmail")}</p> */}
            <Link to="/Home"><span className="fa-stack fa-lg">
                    <i className="fas fa-circle fa-stack-2x backgroundIcons"></i>
                    <i className="fas fa-home fa-stack-1x circleIcons"></i>
                </span></Link>
            
            {
                showCreate ? <CreatePostModal submitPost={handleSubmitPost} /> : <CreatePostBtn handleCreatePost={handleCreatePost} />
            }
            <LogoutButton />
            {/* <Container fluid className="posts"> */}
                <Row className="postsHeader">
                    <Col>
                    <h2>Feed</h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    
            {/* <h2>Feed</h2> */}
            
            <PostList>

                {postList.map(post => {
                        return (
                            <ListItem
                                key={post._id}
                                user={post.user_posted}
                                city={post.city}
                                date={post.date}
                                state={post.state}
                                body={post.body}
                                imageLink={post.image}
                            />
                        )
                    })}
            </PostList>
            
            </Col>
                </Row>


            {/* </Container> */}
            
            </div>
        </div>
    )
}

export default Home