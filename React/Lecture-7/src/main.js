
import React, {useEffect, useState} from "react";  

import ReactDOM from "react-dom/client";



// Background color changer




function Main(){

    const [color, setColor] = useState("black");

    // document.body.style.backgroundColor = color;        // But here we are directly manipulating DOM

    useEffect(()=>{
        document.body.style.backgroundColor = color;
    }, [color]);



    return(
        <>

            <h1>Background Color Changer</h1>

            <div className="but">

                <button style={{backgroundColor:"red"}} onClick={()=>setColor("red")}>Red</button>
                <button style={{backgroundColor:"blue"}} onClick={()=>setColor("blue")}>Blue</button>
                <button style={{backgroundColor:"orange"}} onClick={()=>setColor("orange")}>Orange</button>
                <button style={{backgroundColor:"green"}} onClick={()=>setColor("green")}>Green</button>
                <button style={{backgroundColor:"pink"}} onClick={()=>setColor("pink")}>Pink</button>

            </div>

        </>
    )

}




ReactDOM.createRoot(document.getElementById('root')).render(<Main/>);




// Re-render just means calling function again that is what useState does

// As it calls Main() again after setColor() is used

// So we have used const above so when it calls the function again while re-rendering it again creates those variables again







// When we click Red button first it prints render and then again if we click red it prints render 

// But logically only one time it should print render but it does it 2 times then after that it doesn't

// { above 2 comments are written assuming that we have console.log("render"); statement in Main() }

// This is speciality of React and it is only for primitive datatype only 

// It doesn't do this with object

// This is because it sees object as reference as we know but for primitive it sees value

// So 2nd time it sees that value red is same but executes it then if red is again called then it doesn't do anything

// But if they try to solve it therefore overhead for it so they left it there

// React optimizes as we see here instead of calling or re-rendering again and again it stops it if same instruction is given 

// Hence it saves our space which saves our resources

// Bailout they have there as it executes red one more time then stops from doing it again after making it red already

// They didn't do this for objects as they were big and processing them will take time as for primitive they are small in size so no problem

// So we want the function to only execute again when the colour has really changed

// So for this we have an important hook useEffect

// useEffect(callback function , dependencies );        => useEffect(()=>{}, []);

// So useEffect() prevents the 2nd time when we try to change from red to red it prrevents the lines inside it from executing

// We can also confirm by adding console.log("useEffect executed"); also inside it and outside also another print to see that the function gets executed but useEffect inside code doesn't

// useEffect is executed in dead last as we can just try by putting 2 print statements one above and one below it

// When all the codes is rendered and executed after that useEffect is executed

// Then after this useEffect won't execute again therefore we give it dependency

// So that it only executes when the value of color is actually changed

// If we give [] dependency then it will only execute one time

// If we don't even give [] as dependency then it will execute it everytime









/*

    let obj = {
        red: "red",
        blue: "blue",
        green: "green",
        orange: "orange",
        pink: "pink"
    }

    document.body.style.backgroundColor = obj[color];
    console.log("Executed");



    -- Used this code for trial same was happening (maybe it was due to string coming as obj[color])

    -- Was called red till 2 times after that no response

    -- Using useEffect right call as calls only one time (need to specify dependency or else it might not ever execute again)


*/













// Now we will know why useEffect is so important

// We made a separate file for the main function and added button here and called the main function <Colourful /> in this main function

// So whenever we increment counter it will call colourful too as <Colourful /> is just function all

// So it will again and again render it whenever we click the increment button for counter as we have used useState here for counter value

// So here if we use without useEffect the document.body.style.backgroundColor = color; will get executed everytime the Main function is rendered

// And it is heavy operation as it is manipulating DOM directly 

// Hence if we have any DOM manipulative statements we keep it inside useEffect so that they aren't executed everytime




// We can also save whole function also by using useMemo

// So we will export it with this

/*

    export default React.memo(Colourful)

*/


// We also don't want to put React.memo everywhere also as it also contains some code which increases overhead

// Using React.memo on each file will make code more complex

// Hence only use it when there are too many changes occurring, if there's 2-3 changes occurring just leave it

// So one more importance of memo is that if we do <Colourful name="hunny"/> so this is props (nothing just argument)

// So if the value of name changes or any value in props changes then it will allow it to execute child 

// Kuch change nhi hua toh kyu phirse execute karu mindset of memo
