import react from "react"

function LogoutButton() {

    function handleLogout() {
        console.log("Logging out...")
        localStorage.setItem("currentUsername", "")
        localStorage.setItem("currentEmail", "")
        // logout with passport
        window.location.href="/"
    }

    return (<button onClick={handleLogout}>Logout</button>)
}

export default LogoutButton