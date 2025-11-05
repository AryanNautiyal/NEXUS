

// Can name file anything, so here we first need to create a context that we will use


import { createContext } from "react";



const GlobalContext = createContext("Rohit");                // createContext returns object 

// import wherever you need GlobalContext and then use it like below

// const var = useContext(GlobalContext);

// useContext is also in React


export default GlobalContext;





// So how can we give count and setCount to this

// So this can be done by using <GlobalContext.Provider> So it provides the access to all the files that want

// As it provides data to Global file so that it can be shared




// So after making changes in first.js the "Rohit" will be removed from GlobalContext and instead the object will be there

// This update is only for it's children

// We wrapped it around <Second/> so that it can access it and it's child can also access (If not wrapped then cannot access)

// Can consume data by same useContext


// Cannot do this useState directly in Global file as the setCount needs to re-render the function and update values


// Like for example in dark mode and light mode




// Can store in array or object (use JS basic) to use previous data and current data in GlobalContext

