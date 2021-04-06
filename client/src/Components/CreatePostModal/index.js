import React, { useState } from "react"
import StateSelector from "../StateSelector"
import "./style.css"
import Axios from "axios";
import CustomInput from "../ImageComponent/index";

function CreatePostModal(props) {

    const[formObject, setFormObject] = useState({})

    //Image Upload Code---------------------->
    const [fileData, setFileData] = useState();
    const [images, setFile] = useState("");

    const handleFileChange = ({ target }) => {
        setFileData(target.files[0]);
        setFile(target.value)
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log()

        const formdata = new FormData();

        formdata.append('image', fileData);

        await Axios.post("/api/image/", formdata)
            .then((res) => console.log("res", res.data))
            .catch((error) => console.error(error));
    };

    //<---------------------------------------
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


            <form onSubmit={handleSubmit}>
            <CustomInput
                type='file'
                value={images}
                name='file'
                accept="image/*"
                onChange={handleFileChange}
                placeholder='upload image'
                isRequired={true}
            />
            <button>submit</button>
        </form>


    </div>    
    )
}

export default CreatePostModal