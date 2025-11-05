


import { useEffect, useState } from "react";
import {useParams} from "react-router";


export default function Github(){

    const {name} = useParams();

    const [Profile, setProfile] = useState(null);

    async function fetchuser() {

        const response = await fetch(`https://api.github.com/users/${name}`);

        const data = await response.json();

        setProfile(data);

    }

    useEffect(()=>{
        fetchuser()
    }, [])

    return (


        <>

            <h1>My Github Profile</h1>

            {/* To display the user data */}

            {/* Hence we use here useParams to get the data (it returns an object in which here key is name and value is entered by us in link) */}

            <div>
                <img src={Profile?.avatar_url}></img>

                <h2>{Profile?.login}</h2>

                {/* Placed "?" so that it won't place null as useEffect is executed in last */}

                {/* So if the content is not there it won't load and then when it's there it will load it there */}

            </div>

        
        </>
    )
} 



