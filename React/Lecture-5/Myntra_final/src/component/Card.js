


function Card(props){
    return(

        <div className="card" style={{border:"2px solid green" , padding:"2px", backgroundColor:"green"}}>
            <img src="https://www.technosport.in/cdn/shop/files/OR81Black_1.jpg?crop=center&height=2048&v=1755594588&width=2048" height="200px" width="200px"/>

            <div style={{textAlign:"center"}}>
                <h2>{props.cloth}</h2>
                <h1>{props.offer}</h1>
                <h2>Shop Now</h2>
            </div>
        </div>

    )
}

export default Card;