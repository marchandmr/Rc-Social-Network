import React, {Component, useEffect, useState} from "react"
import LogoutButton from "../LogoutButton"
import {PostList, ListItem} from "../PostList"


function Home(){

    const [postList, updatePostList] = useState([])

    useEffect(() =>{
        console.log("Content loaded")

        // load posts with axios here??

    }, [postList])

    return(
        <div>
             <h1>RC Spots</h1>
             <LogoutButton/>
             <p>Hello {localStorage.getItem("currentUsername")} </p>
             <p>Your email is {localStorage.getItem("currentEmail")}</p>
             <h2>Post list goes under here</h2>
             <PostList>

             </PostList>
        </div>
    )
}

export default Home