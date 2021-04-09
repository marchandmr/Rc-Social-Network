import React, { useState } from "react"
import StateSelector from "../StateSelector"
import "./style.css"
import Axios from "axios";
import CustomInput from "../ImageComponent/index";
import Form from "react-bootstrap/Form"
import API from "../../utils/API";
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function CreatePostModal(props) {

    const [formObject, setFormObject] = useState({})

    //Image Upload Code---------------------->
    const [fileData, setFileData] = useState();
    const [images, setFile] = useState("");


    const handleFileChange = ({ target }) => {
        setFileData(target.files[0]);
        setFile(target.value)
    };

    function getPreciseLoc() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            alert("Geolocation is not supported by this browser.");
        }
        function showPosition(position) {
            let lat = position.coords.latitude;
            let long = position.coords.longitude;
            let preciseLocString = `http://maps.google.com/maps?q=${lat},${long}`
            console.log(preciseLocString);
        }
    }


    const handleSubmit = async () => {

        const formdata = new FormData();

        formdata.append('image', fileData);

        // if there is no image to upload, skip cloudinary
        if (!fileData) {
            localStorage.setItem("imageLink", "")
            props.submitPost(formObject)

        } else { //otherwise there is an image to upload
            API.createImage(formdata)
                .then((res) => {
                    localStorage.setItem("imageLink", res.data.image)
                    props.submitPost(formObject)
                })
                .catch((error) => console.error(error));

        }
    };

    //<---------------------------------------
    function handleInputChange(event) {
        const { name, value } = event.target
        setFormObject({ ...formObject, [name]: value })
    }


    
    return(
        <>
        <Container>
    <div id="postModal" className="wrapper">
        <h2>Create a Post</h2>
        <Form>
            <Container className="formArea">
            <Form.Row>                    
            <Form.Control as="textarea" rows={4} placeholder="Description" name="body"
            onChange={handleInputChange}
            />
            
           </Form.Row>
           <br />
           <Form.Row className="cityForm">
            <input type="text" placeholder="City" name="city"
            onChange={handleInputChange}
            />
           
            {/* state selector tx-ks-ark */}
            <StateSelector handleInputChange={handleInputChange}/>
            </Form.Row>

            {/* image uploader */}
            <Form.Row>
            <Form.File
                className='fileUpload'
                type='file'
                value={images}
                name='file'
                accept="image/*"
                onChange={handleFileChange}
                placeholder='upload image'
                // isRequired={true}
            />
            </Form.Row>
            </Container>
        </Form>


            {/* probably change this to oscars handle submit, not passing form object */}
            <button onClick={() => handleSubmit()}>Submit</button>
            <button onClick={() => getPreciseLoc()}>share location</button>


            {/* <form onSubmit={handleSubmit}>
            <CustomInput
                type='file'
                value={images}
                name='file'
                accept="image/*"
                onChange={handleFileChange}
                placeholder='upload image'
                // isRequired={true}
            />
            <button>submit</button>
        </form> */}


        </div>
        </Container>
        </>
    )
    
}

export default CreatePostModal