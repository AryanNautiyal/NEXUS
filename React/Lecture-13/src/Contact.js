


import { Link, Outlet } from "react-router"

export default function Contact(){

    return (

        <>

            <nav>

                    <Link to="/Contact">General</Link>
                    <Link to="details">Details</Link>
                    <Link to="email">Email</Link>
            </nav>
        
            <h1>Welcome to Contact Page</h1>

            <Outlet></Outlet>
        
        </>
        
    )
}