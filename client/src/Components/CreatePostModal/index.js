import React, { useState } from "react"
import StateSelector from "../StateSelector"
import "./style.css"
import Axios from "axios";
import CustomInput from "../ImageComponent/index";
import Form from "react-bootstrap/Form"
import API from "../../utils/API";

function CreatePostModal(props) {

    const[formObject, setFormObject] = useState({})

    //Image Upload Code---------------------->
    const [fileData, setFileData] = useState();
    const [images, setFile] = useState("");
    

    const handleFileChange = ({ target }) => {
        setFileData(target.files[0]);
        setFile(target.value)
    };

    function handleSubmit (event){
        event.preventDefault();
        console.log(handleSubmit)

        const formdata = new FormData();

        formdata.append('image', fileData);

        API.createImage(formdata)
            .then(res =>
                setFormObject(res.data.image)
                // console.log("res", res.data)
                // console.log(res.data.image)
                
                // get the cloudinary url link from res.data somewhere
                // add that data to Jason's form object state
                // call props.submitPost(formObject)
            )
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

            {/* state selector tx-ks-ark */}
            <StateSelector handleInputChange={handleInputChange}/>
        </form>
            {/* probably change this to oscars handle submit, not passing form object */}
            {/* <button onClick={()=>submitPost( formObject )}>Submit</button> */}


            <form onSubmit={handleSubmit}>
            <Form.File
                type='file'
                value={images}
                name='file'
                accept="image/*"
                onChange={handleFileChange}
                placeholder='upload image'
                // isRequired={true}
            />
            {/* <button>submit</button> */}
            <button onClick={()=>submitPost( formObject )}>Submit</button>
        </form>


    </div>    
    )
}

export default CreatePostModal