








import React from "react";

import ReactDOM from "react-dom/client";


import { Provider } from "react-redux";

import Header from "./component/Header";

import Card from "./component/Card";

import stores from "./store";

import { Provider } from "react-redux";




function App(){


    return (

        <>

            <Provider store={stores}>

                <Header></Header>

                <Card></Card>

            </Provider>

        </>
        
    )
}






ReactDOM.createRoot(document.getElementById("root")).render(<App></App>);

