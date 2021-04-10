import API from "../../utils/API"

function LogoutButton() {

    function handleLogout() {

        // logout with passport
        API.logout()
        window.location.href = "/"
        localStorage.setItem("currentUsername", "")
        localStorage.setItem("currentEmail", "")
    }

    return (<button className="circlebtn" onClick={handleLogout}>
        <span className="fa-stack fa-2x">
            <i className="fas fa-circle fa-stack-2x backgroundIcons"></i>
            <i className="fas fa-door-open fa-stack-1x fa-inverse circleIcons"></i>
        </span>
    </button>)
}

export default LogoutButton