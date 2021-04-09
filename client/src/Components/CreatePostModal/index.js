import React, { useState } from "react"
import StateSelector from "../StateSelector"
import "./style.css"
import Form from "react-bootstrap/Form"
import API from "../../utils/API";
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";




function CreatePostModal(props) {

    const[formObject, setFormObject] = useState({})
    // const[imageLink, setImageLink] = useState("")

   

    //Image Upload Code---------------------->
    const [fileData, setFileData] = useState();
    const [images, setFile] = useState("");
    

    const handleFileChange = ({ target }) => {
        setFileData(target.files[0]);
        setFile(target.value)
    };

    const handleSubmit = async () => {
        // e.preventDefault();

        const formdata = new FormData();

        formdata.append('image', fileData);

        // if there is no image to upload, skip cloudinary
        if(!fileData){
            localStorage.setItem("imageLink", "")
            props.submitPost(formObject)

        } else{ //otherwise there is an image to upload
            API.createImage(formdata)
                .then((res) => {
                    console.log("CLOUDINARY RESPONSE", String(res.data.image))
                    // get the cloudinary url link from res.data somewhere
                    // add that data to Jason's form object state
                    localStorage.setItem("imageLink", res.data.image)
                    // call props.submitPost(formObject)
                    props.submitPost(formObject)
                })
                .catch((error) => console.error(error));

        }
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
        <Form>
           <Container className="formArea">
             <Form.Row>                    
                <Form.Control as="textarea" rows={4} placeholder="Description" name="body"
                onChange={handleInputChange}/>
             </Form.Row>
            <br />
            <Form.Row>
            {/* <Form.Group as={Col} controlId="city" type="text" onChange={handleInputChange} name="city">
                 <Form.Label>City</Form.Label>
                 <Form.Control />
                </Form.Group> */}


            <input type="text" placeholder="City" name="city"
            onChange={handleInputChange}
            />
           
            {/* state selector tx-ks-ark */}

            <StateSelector handleInputChange={handleInputChange}/>
            </Form.Row>

            <Form.Row>
            {/* image uploader */}
            <Form.File
                type='file'
                value={images}
                name='file'
                accept="image/*"
                onChange={handleFileChange}
                placeholder='upload image'
                isRequired={true}
            />
            </Form.Row>
            </Container>
        </Form>
            <button onClick={()=>handleSubmit()}>Submit</button>




    </div>    
    )
}

export default CreatePostModal