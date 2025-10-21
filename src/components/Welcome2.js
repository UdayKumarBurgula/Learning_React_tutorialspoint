import React from "react";
function Welcome2(props) {
    if (props.isLoggedIn) {
        return <div>Welcome, {props.userName}</div>
    } else {
        return <div><a href="/login">Login</a></div>
    }
}

export default Welcome2;