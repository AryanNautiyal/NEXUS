
// Can also write export default with function also


function Footer(){

    return(
        <div className="img-container">
        <img className="image-bottom" src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2025/7/21/fa1fbec9-5487-4d3b-b017-97c15bfde79b1753083164349-App-Install-Banner-----2.png" width="1200px" />
        </div>
    )
}


// Exported it so that we can import it in our myntra.js

// component folder used to store component (here stored function component)

// One file can only have one export default 

// So we can just write export in front of function so that the function can also be exported if there are many things in one file

// Can import 2 function from same component file by using this "import {greet , meet} from './component/Header'; "

// When we write only export like explained above in front of function then we need to use {} these and write name inside it



export default Footer;