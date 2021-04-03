import React from "react"
import "./style.css"

export function PostList() {


    return (

        <div className="list-overflow-container" >
            <ul className="list-group">
                {/* List items go in here */}
            </ul>
        </div>

    )
}

export function ListItem() {
    return <li className="list-group-item"></li>;
}

