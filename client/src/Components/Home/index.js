import React, { useEffect, useState } from "react"
import API from "../../utils/API"
import CreatePostBtn from "../CreatePostBtn"
import CreatePostModal from "../CreatePostModal"
import LogoutButton from "../LogoutButton"
import { PostList, ListItem } from "../PostList"

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
            <h1>RC Spots</h1>
            <LogoutButton />
            <p>Hello {localStorage.getItem("currentUsername")} </p>
            <p>Your email is {localStorage.getItem("currentEmail")}</p>
            {
                showCreate ? <CreatePostModal submitPost={handleSubmitPost} /> : <CreatePostBtn handleCreatePost={handleCreatePost} />
            }
            <h2>Post list goes under here</h2>
            <PostList>

                {
                    postList.map(post => {
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
        </div>
    )
}

export default Home