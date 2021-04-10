import React, { useState } from "react"
import StateSelector from "../StateSelector"
import "./style.css"
import Form from "react-bootstrap/Form"
import API from "../../utils/API";
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button"
import { Link } from "react-router-dom"

function CreatePostModal(props) {

    const [formObject, setFormObject] = useState({})

    //Image Upload Code---------------------->
    const [fileData, setFileData] = useState();
    const [images, setFile] = useState("");

    const [showCreate, updateShowCreate] = useState(false)


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
        <Container className="postWrapper">
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
            <br />
            
            <Link to="/Home"><Button className="gobackBtn" variant="danger" onClick={() => updateShowCreate(true)}><i className="fas fa-arrow-alt-circle-left fa-lg"></i> Go Back</Button></Link>
            <Button className="locationBtn" variant="success" onClick={() => getPreciseLoc()}><i class="fas fa-location-arrow fa-lg"></i> Share Location</Button>
            <Button className="submitBtn" onClick={() => handleSubmit()}><i class="fas fa-upload fa-lg"></i> Submit</Button>
            
            </Container>
        </Form>
        <br />
        </div>
        </Container>
        </>
    )
    
}

export default CreatePostModal