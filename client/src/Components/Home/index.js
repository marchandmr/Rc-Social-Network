import React, { useEffect, useState } from "react"
import API from "../../utils/API"
import CreatePostBtn from "../CreatePostBtn"
import CreatePostModal from "../CreatePostModal"
import LogoutButton from "../LogoutButton"
import { PostList, ListItem } from "../PostList"


function Home() {

    const [postList, updatePostList] = useState([])
    const [showCreate, updateShowCreate] = useState(false)

    function loadUsername() {
        console.log("Loading username....")
        // axios here....

        localStorage.setItem("currentUsername", "Maya Naeuri")
    }

    useEffect(() => { loadUsername() }, [])

    useEffect(() => {

        // load posts with axios here??
        API.getPosts()
        .then(res => {
            console.log("Get posts: ", res)
            console.log("Content loaded")
        })
       
    }, [postList])


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

        
        if (verifyPostInputs(postObject)) {
            // hide modal and bring button back
            updateShowCreate(false)
            // post to the database
            API.createPost(postObject)
                .then(response => {
                    console.log("Response: ", response.data)
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

            </PostList>
        </div>
    )
}

export default Home