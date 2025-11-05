

// // React Routing

// // Hence there is a library React Rotuing which has made this work smoother and easier

// // React Router efficiently routes the page



// // Without React router also we can do this work but it will make code complex and greater in length



// import React from "react";

// import ReactDOM from "react-dom/client";

// import {BrowserRouter, Routes , Route, Link} from "react-router";

// import Home from "./Home";

// import Contact from "./Contact";

// import Dashboard from "./Dashboard";

// import Details from "./Details";

// import Email from "./Email";

// function App(){


//     return (


//         // BrowserRouter indicates that from here we are starting our routing

//         <BrowserRouter>         

//         <nav>

//             {/* Works same like anchor tag gives us links to switch between JS files without reloading */}

//                 <Link to="/">Home</Link>
//                 <Link to="/contact">Contact</Link>

//                 {/* If we click on contact takes us to link/contact page (that's why to is written there) */}

//                 <Link to="/dashboard">Dashboard</Link>  

//         </nav>    

//         <Routes>

//             {/* Routes is used so that only one of the path works at a single time or can say only one page is shown at a time */}

//                 <Route path="/" element={<Home></Home>}></Route>

//                 <Route path="/contact" element={<Contact></Contact>}>

//                 {/* To make nested links */}
                
//                         <Route index path="details" element={<Details></Details>}></Route>

//                         <Route path="email" element={<Email></Email>}></Route>

                
//                 </Route>

                

//                 {/* Route is used to create path, we give in path like what we want like if we do /contact then Contact page */}

//                 {/* If we do / then home page like that and element shows the function we need to show */}

//                 <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>


//         </Routes>
        
//         </BrowserRouter>




//     )
// }





// ReactDOM.createRoot(document.getElementById("root")).render(<App/>);









































// React Routing

// Hence there is a library React Rotuing which has made this work smoother and easier

// React Router efficiently routes the page



// Without React router also we can do this work but it will make code complex and greater in length



import React from "react";

import ReactDOM from "react-dom/client";

import {BrowserRouter, Routes , Route, Link} from "react-router";

import Home from "./Home";

import Contact from "./Contact";

import Dashboard from "./Dashboard";

import Details from "./Details";

import Email from "./Email";

import General from "./General";

function App(){


    return (


       

        <BrowserRouter>         

        <nav>

                {/* Need to write all this in BrowserRouter in main file only in other can write outside too */}

                {/* As other files data are rendered from here only so in the end all code is in BrowserRouter */}
           

                <Link to="/">Home</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/dashboard">Dashboard</Link>  
                           
        </nav>    

        <Routes>

           

                <Route path="/" element={<Home></Home>}></Route>

                <Route path="/contact" element={<Contact></Contact>}>


                {/* Not showing these as we haven't rendered them yet so we use <Outlet> in the contact.js file */}


                        {/* index is used to show this file by default */}


                        <Route index element={<General></General>}></Route>
                
                        <Route path="details" element={<Details></Details>}></Route>

                        <Route path="email" element={<Email></Email>}></Route>

                        {/* Didn't write / as with / it starts looking for file from root  */}

                        {/* So we just wrote email so that it sees this and knows that it's relative path and looks from parent */}

                        {/* Outlet catches and renders one of the path from above */}

                
                </Route>



                <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>


        </Routes>
        
        </BrowserRouter>




    )
}





ReactDOM.createRoot(document.getElementById("root")).render(<App/>);