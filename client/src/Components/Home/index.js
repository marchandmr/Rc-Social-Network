import React, { useEffect, useState } from "react"
import API from "../../utils/API"
import CreatePostBtn from "../CreatePostBtn"
import CreatePostModal from "../CreatePostModal"
import LogoutButton from "../LogoutButton"
import { PostList, ListItem } from "../PostList"
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../Footer";


const USERNAME = "currentUsername"
const EMAIL = "currentEmail"


function Home() {

    const [postList, updatePostList] = useState([])
    const [showCreate, updateShowCreate] = useState(false)
    const [loadSwitch, updateLoadSwitch] = useState(false)
    const [user, updateUser] = useState("")

    function loadUsername() {

        API.findUser({
            email: localStorage.getItem(EMAIL)
        })
            .then(res => {
               
                localStorage.setItem(USERNAME, res.data)
                updateUser(res.data)
                updateLoadSwitch(!loadSwitch)
            })
            .catch(e => {
                console.log(e)
            })

    }

    useEffect(() => {

        API.getPosts()
            .then(res => {
                updatePostList(res.data)
            })

    }, [loadSwitch])

    useEffect(() => { loadUsername() }, [])



    function handleCreatePost() {
        // make the modal appear
        if(user === ""){
            alert("You must be signed in to create a post")
            return
        }
        updateShowCreate(true)

    }

    function verifyPostInputs(post) {
        if (!post.body || !post.city || !post.state || !post.image) {
            alert("Please fill out Description, City, State, and upload an image.")
            return false
        }
        return true
    }

    function handleSubmitPost(postObject) {

        postObject.user_posted = localStorage.getItem("currentUsername")
        postObject.image = localStorage.getItem("imageLink")
        postObject.exactlocation = localStorage.getItem("geoLink")

       

        // free up local storage
        localStorage.setItem("imageLink", "")
        localStorage.setItem("geoLink", "")

        if (verifyPostInputs(postObject)) {
            // hide modal and bring button back
            updateShowCreate(false)
            // post to the database
            API.createPost(postObject)
                .then(response => {
                   
                    updateLoadSwitch(!loadSwitch)
                })
                .catch(error => {
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
                        Signed in as: <a href="">{localStorage.getItem("currentUsername")}</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
            <div className="postPage">
                <br />
                <br />
                <br />

                <Link to="/Home"><span className="fa-stack fa-2x">
                    <i className="fas fa-circle fa-stack-2x backgroundIcons"></i>
                    <i onClick={() => window.location.reload()} className="fas fa-home fa-stack-1x circleIcons"></i>
                </span></Link>

                <LogoutButton />
                {
                    showCreate ? <CreatePostModal updateShowCreate={updateShowCreate} submitPost={handleSubmitPost} /> : <CreatePostBtn handleCreatePost={handleCreatePost} />
                }
                <Row className="postsHeader">
                    <Col>
                        <h2>Feed</h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
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
                                        exactlocation={post.exactlocation}
                                    />
                                )
                            })}
                        </PostList>
                    </Col>
                </Row>
            </div>
            <Footer />
        </div>
    )
}

export default Home