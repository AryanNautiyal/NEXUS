import { useEffect, useState } from "react";


function Body(){

    const [Profile, setProfile] = useState([]);

    const [numberofprofile, setnumberofprofile] = useState(10);
    
    async function generateProfile(count){

        const id = Math.floor(1+Math.random()*10000);       // Added 1 to make it 1 to 10000

        try{
            const response = await fetch(`https://api.github.com/users?since=${id}&per_page=${count}`);

            const data = await response.json();

            setProfile(data);
            
        }
        catch(err){
            console.log("Error");
        }

        
    }

    useEffect(()=>{
        generateProfile(10);
    }, []);

    return (

        <>
            <div className="container">

                    <input type="number" placeholder="Enter a number" value={numberofprofile} onChange={(e)=>setnumberofprofile(Number(e.target.value))}></input>

                    <button onClick={()=>generateProfile(numberofprofile)}>Search Profile</button>

            </div>

            <div className="profiles">

                {

                    Profile.map((value)=>{

                    return (
                        
                        <div key={value.id} className="cards">

                            <img src={value.avatar_url}></img>

                            <h2>{value.login}</h2>

                            <a href={value.html_url} target="_blank">Profile</a>

                            
                        </div>

                    )

                    })

                }

            </div>
        </>
    )
}


export default Body;





/*

            async function generateProfile(count){

                const response = await fetch(`https://api.github.com/users?per_page=${count}`);

                const data = await response.json();

                setProfile(data);
            }



            // updated this to make more random


*/