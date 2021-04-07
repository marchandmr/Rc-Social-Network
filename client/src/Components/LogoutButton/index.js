import API from "../../utils/API"

function LogoutButton() {

    function handleLogout() {
        console.log("Logging out...")
        
        // logout with passport
        API.logout()
        window.location.href="/"
        localStorage.setItem("currentUsername", "")
        localStorage.setItem("currentEmail", "")
    }

    return (<button onClick={handleLogout}>Logout <i className="fa fa-sign-out" aria-hidden="true"></i></button>)
}

export default LogoutButton