import React from "react"
import PostList from "../PostList"

function Home(){


    return(
        <div>
             <h1>RC Spots</h1>
             <p>Hello {localStorage.getItem("currentUsername")} </p>
             <p>Your email is {localStorage.getItem("currentEmail")}</p>
             <h2>Post list goes under here</h2>
             <PostList>


             </PostList>
        </div>
    )
}

export default Home