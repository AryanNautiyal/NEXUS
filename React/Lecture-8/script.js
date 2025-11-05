

import React, {useEffect, useState, useCallback} from "react";

import ReactDOM from "react-dom/client";


function PasswordGenerator(){

    const [Password, setPassword] = useState("");

    const [length , setLength] = useState(10);

    const [numberChanged, setnumberChanged] = useState(false);

    const [charChanged, setcharChanged] = useState(false);


    const generatepassword = useCallback(()=>{

        let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        
        if(numberChanged)
        {
            str += "0123456789";
        }

        if(charChanged)
        {
            str+= "+-_)({}][/?><,.;':|~`!@#$%^&*";
        }

        let pass = ""

        for(let i=0;i<length;i++)
        {
            pass += str[Math.floor(Math.random()*str.length)];
        }

        setPassword(pass);

    }, [numberChanged, charChanged, length]);


    useEffect(()=>{
        generatepassword();
    },[generatepassword]);


    return (

        <>

            <h1>{Password}</h1>

            <div className="second">

                <input type="range" min={5} max={50} value={length} onChange={(e)=>setLength(e.target.value)}></input>

                <label>Length : {length}</label>

                <input type="checkbox" id="inp1" defaultChecked={numberChanged} onChange={()=>setnumberChanged(!numberChanged)}></input>

                <label htmlFor="inp1">Number</label>

                <input type="checkbox" id="inp2" defaultChecked={charChanged} onChange={()=>setcharChanged(!charChanged)}></input>

                <label htmlFor="inp2">Character</label>                 

            </div>
        
        </>
    )

}




ReactDOM.createRoot(document.getElementById('root')).render(<PasswordGenerator/>);






// for isn't there so htmlFor works

// defaultChecked used if true then by default selects or ticks the checkbox

// onChange event listener is used here so that if it's value is changed we can perform some action

// If we directly call generatepassword() it goes into infinite loop (due to too many re-renders)

// It was occurring because as we were calling generatepassword() inside it was calling setPassword()

// setPassword() executes the PasswordGenerator() again which leads to loop





// Updated 

// Used useCallback to create new function only if there is change in length , char and number 

// Similarly we gave generate password as dependency as it will only change when any of the above 3 will change so same

// So when function is called again it doesn't again create the function instead it uses the one created before

// Hence useCallback is used 

// We can put whole code inside useCallback also, it will work fine with optimization



// Optimization is done as memory allocation was repeating again and again for function passwordgenerator

// Hence used useCallback so it uses previous created function only

// Main reason was when setPassword() was called it again executed the PasswordGenerator() due to this the

// function generatepassword() was again created which we didn't want as it was already created before


// set functions that we use with useState are created once only and after that same are used as their reference is stored

