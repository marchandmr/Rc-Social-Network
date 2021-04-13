import React from "react"
import moment from "moment"
// import "./style.css"
import '../../App.css';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container"

export function PostList({ children }) {
    return (
        <div className="list-overflow-container" >
            <ul className="list-group">
                {children}
            </ul>
        </div>
    )
}

export function ListItem(props) {

    function checkLinkExists() {
        if (props.exactlocation) {
            // exists
            return <a href={props.exactlocation} target="_blank" rel="noreferrer">Link</a>
        } else {
            // DNE
            return <span>N/A</span>
        }
    }

    function processDate(date) {
        let m = moment(date, 'YYYY-MM-DD')
        return m.format('LL')
    }


    return (
        <div>
            <li className="list-group-item">
                <Container fluid>
                    <Row>
                        <Col className="imgContainer">
                            <a href={props.imageLink}><img className="itemImg" src={props.imageLink} alt="userimage"></img> </a>
                        </Col>
                        <Col className="postInfo">
                            <p className="itemDate"><strong>Date: </strong> {processDate(props.date)}</p>
                            <p className="itemCity"><strong>City: </strong>{props.city}</p>
                            <p className="itemState"><strong>State: </strong>{props.state}</p>
                            <p className="itemBody"><strong>Description: </strong>{props.body}</p>
                            <p className="itemGeoLink"><strong>Map Location: </strong>{checkLinkExists()} </p>
                            <h3><strong>Posted by: </strong>{props.user}</h3>
                        </Col>
                    </Row>
                </Container  >
            </li>
        </div>
    )
}

