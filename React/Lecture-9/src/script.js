
import React, {useState , useEffect, useCallback} from "react";

import ReactDOM from "react-dom/client";

import Header from "./component/Header";

import Body from "./component/Body";



function GithubProfile(){

    // Header

    // Body: 10 card show karenge

    return (
        <>

            <Header></Header>

            <Body></Body>
        
        </>
    )
}




ReactDOM.createRoot(document.getElementById('root')).render(<GithubProfile/>);