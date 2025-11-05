





// Why key is needed



import React from "react";

import ReactDOM from "react-dom/client";

import Add from "./component/Add";



function App(){

    const arr = [0,1,2,3];

    return (

        <>

        {arr.map((value)=><Add key={value}></Add>)}
        
        </>


    )
}






ReactDOM.createRoot(document.getElementById("root")).render(<App></App>);







/*

    So when we click increment button how can we determine that which count is to be incremented ??

    As all are count and all are using Add function

    Hence we need key to uniquely identify them

    So our state is attached to key then so if we then call Add it will refer to key as it's unique



*/






/*

        Let's assume we first had this


    <li>Milk</li>
    <li>Sugar</li>
    <li>Chai</li>


    Then we updated and this is the result

    <li>Samosa</li>
    <li>Milk</li>
    <li>Sugar</li>
    <li>Chai</li>

    So when virtual DOM are compared it will see that instead of Milk there's Samosa, instead of Sugar there's Milk

    instead of Chai there's sugar and there's one more li added at the end with Chai in it

    So when we don't use key so it will update like this after comparing :



    Destroy first li row and add new node Samosa at first and same with other 2 (destroy Sugar and Chai node and add Milk and Sugar node)

    In the end it will add one more node Chai


    This update is not meaningful as what we have done is added Samosa in the front and shifted each 1 place

    Itna Ganda Update h yeh pehle waala sabhko maarke zinda kar rha jabhki sirf ek ko add kiya tha



    So in bad update first we are releasing memory then allocating memory repeatedly so we did 4 memory allocation and 3 memory allocation released

    So this is very expensive


    In good or ideal update we are doing 1 memory allocation and just shifting position 

    So this is done by key here

    So if we use key Milk, Sugar, Chai then the ideal update will be done as

    it will compare first key Samosa with key Milk so it will see that it cannot compare as key is different

    So it will create Samosa one and then will compare and will see others are equal

    As first key were different so it knew that it needs to be created

*/