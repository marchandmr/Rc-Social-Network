import React from "react"
import moment from "moment"
import "./style.css"

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

    console.log("MY PROPS: ", props)

    function processDate(date) {
        let m = moment(date, 'YYYY-MM-DD')
        return m.format('LL')
    }


    return (
        <div>
            <li className="list-group-item">
                <h3>{props.user}</h3>
                <img className="itemImg" src={props.imageLink}></img>
                <p className="itemDate">Date: {processDate(props.date)}</p>
                <p className="itemCity">{props.city}</p>
                <p className="itemState">{props.state}</p>
                <p className="itemBody">{props.body}</p>
            </li>
            <hr />

        </div>
    )
}

