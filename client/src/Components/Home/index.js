import React, { useEffect, useState } from "react"
import CreatePostBtn from "../CreatePostBtn"
import CreatePostModal from "../CreatePostModal"
import LogoutButton from "../LogoutButton"
import { PostList, ListItem } from "../PostList"


function Home() {

    const [postList, updatePostList] = useState([])
    const [showCreate, updateShowCreate] = useState(false)

    useEffect(() => {

        // load posts with axios here??

        console.log("Content loaded")
    }, [postList, showCreate])

    function handleCreatePost() {
        console.log('Create a post!')

        // make the modal appear
        updateShowCreate(true)

    }

    function handleSubmitPost(postObject){
        // submit the post via axios route
       
        console.log(postObject)
        // hide modal and bring button back
        updateShowCreate(false)
    }

    return (
        <div>
            <h1>RC Spots</h1>
            <LogoutButton />
            <p>Hello {localStorage.getItem("currentUsername")} </p>
            <p>Your email is {localStorage.getItem("currentEmail")}</p>
            {
                showCreate? <CreatePostModal submitPost={handleSubmitPost}/> : <CreatePostBtn handleCreatePost={handleCreatePost} />
            }
            <h2>Post list goes under here</h2>
            <PostList>

            </PostList>
        </div>
    )
}

export default Home