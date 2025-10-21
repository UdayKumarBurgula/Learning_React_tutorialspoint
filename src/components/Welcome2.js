import React from "react";
function Welcome2(props) {
    //let output = null;
    //if (props.isLoggedIn) {
    //    output = <div>Welcome, {props.userName} :) </div>
    //} else {
    //    output = <div><a href="/login">Login</a></div>
    //}
    //return output

    //if (props.isLoggedIn) {
    //    return <div>Welcome, {props.userName}</div>
    //} else {
    //    return <div><a href="/login">Login</a></div>
    //}

    return props.isLoggedIn ? <div>Welcome--, {props.userName}</div> : null
}

export default Welcome2;