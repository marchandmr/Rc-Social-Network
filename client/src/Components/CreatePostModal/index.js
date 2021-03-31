import React, { useState } from "react"
import StateSelector from "../StateSelector"
import "./style.css"

function CreatePostModal(props) {

    const[formObject, setFormObject] = useState({})

    function handleInputChange(event) {
        const {name, value} = event.target
        setFormObject({...formObject, [name]: value})
    }

    const {submitPost} = props
    return(

    <div id="postModal" className="wrapper">
        <h2>Create a Post</h2>
        <form>
            <textarea rows="5" cols="30" placeholder="Description" name="body"
            onChange={handleInputChange}
            />
            <input type="text" placeholder="City" name="city"
            onChange={handleInputChange}
            />
            <StateSelector handleInputChange={handleInputChange}/>
        </form>
            <button onClick={()=>submitPost( formObject )}>Submit</button>
    </div>)

}

export default CreatePostModal