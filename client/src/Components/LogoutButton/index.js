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
        <span className="fa-stack fa-2x logoutStack">
            <i className="fas fa-circle fa-stack-2x logoutBkgndCircle"></i>
            <i className="fas fa-door-open fa-stack-1x fa-inverse logoutCircle"></i>
        </span>
    </button>)
}

export default LogoutButton