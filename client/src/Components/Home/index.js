import React, {Component, useEffect} from "react"
import LogoutButton from "../LogoutButton"
import {PostList, ListItem} from "../PostList"


function Home(){

    useEffect(() =>{
        console.log("Content loaded")

        // load posts with axios here??

    })

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