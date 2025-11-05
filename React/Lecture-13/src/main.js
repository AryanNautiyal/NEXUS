



import React from "react";

import ReactDOM from "react-dom/client";

import {BrowserRouter, Routes , Route, Link} from "react-router";

import Home from "./Home";

import Contact from "./Contact";

import Dashboard from "./Dashboard";

import Details from "./Details";

import Email from "./Email";

import General from "./General";

import Github from "./Github";

function App(){


    return (


       

        <BrowserRouter>         

        <nav>

           

                <Link to="/">Home</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/dashboard">Dashboard</Link> 
                <Link to="/Github">Github</Link>  
                           
        </nav>    

        <Routes>

           

                <Route path="/" element={<Home></Home>}></Route>

                <Route path="/contact" element={<Contact></Contact>}>



                        <Route index element={<General></General>}></Route>
                
                        <Route path="details" element={<Details></Details>}></Route>

                        <Route path="email" element={<Email></Email>}></Route>

                
                </Route>



                <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>

                <Route path="/Github/:name" element={<Github></Github>}></Route>

                {/* Made it dynamic in link, ":" is used to show that any value can be there in place of name */}

                {/* So that to search someone profile we can use /Github/${name}, ":" is important to make dynamic or to show it's dynamic value*/}


        </Routes>
        
        </BrowserRouter>




    )
}





ReactDOM.createRoot(document.getElementById("root")).render(<App/>);





// Custom hook is nothing just take some part of code out in other file name it like something like useFetch

// return object from it and use it 

// This is custom hook