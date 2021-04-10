import React from "react"

function CreatePostBtn(props) {

    return(
        <button className="circlebtn" onClick={props.handleCreatePost}>   <span className="fa-stack fa-2x">
        <i className="fas fa-circle fa-stack-2x backgroundIcons"></i>
        <i className="fas fa-pencil-alt fa-stack-1x circleIcons"></i>
    </span>
</button>
    )    

}

export default CreatePostBtn