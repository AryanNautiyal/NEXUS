



// import React, { useState } from "react";

// import ReactDOM from "react-dom/client";





// function App(){

//     return (

//         <h1 className="bg-gray-400 text-[4rem] mt-[10px] rounded-4xl pl-10 flex justify-center">Hello Coder Army</h1>
//     )
// }







// ReactDOM.createRoot(document.getElementById("root")).render(<App></App>);





import React, { useState } from "react";

import ReactDOM from "react-dom/client";





function App(){

    return (

        <div className="flex gap-1 h-[100vh] flex-wrap justify-center">

            <div className="max-w-sm overflow-hidden bg-white shadow-md p-4 mt-5 ">

                <div>

                    <img className="w-full h-90 object-cover rounded" src="https://media.licdn.com/dms/image/v2/D5603AQGK1b2Cqjs2rA/profile-displayphoto-shrink_200_200/B56ZcRn.tXHgAY-/0/1748347385332?e=2147483647&v=beta&t=fSSKwIrDtdHAQiR9ynkLxrg9WOJPNgtTviZWqWNnXzw"></img>

                    {/* So to maintain the aspect ratio of the image we used object-cover */}

                    {/* Due to this the image is zoomed out to maintain the image aspect ratio */}

                </div>

                <div className="mt-2 font-bold text-2xl text-gray-700">

                    <h1>Biography</h1>

                </div>

                <div className="text-gray-500 mt-2">

                    <p>Rohit Negi is a very good boy. He is very gareeb because he operates Oppo</p>

                </div>

                <div className="bg-sky-300 rounded-xl p-1 text-white flex justify-center mt-2 hover:bg-sky-800">
                    <button>Know More</button>

                </div>

            </div>

            <div className="max-w-sm overflow-hidden bg-white shadow-md p-4 mt-5 ">

                <div>

                    <img className="w-full h-90 object-cover rounded" src="https://media.licdn.com/dms/image/v2/D5603AQGK1b2Cqjs2rA/profile-displayphoto-shrink_200_200/B56ZcRn.tXHgAY-/0/1748347385332?e=2147483647&v=beta&t=fSSKwIrDtdHAQiR9ynkLxrg9WOJPNgtTviZWqWNnXzw"></img>

                    {/* So to maintain the aspect ratio of the image we used object-cover */}

                    {/* Due to this the image is zoomed out to maintain the image aspect ratio */}

                </div>

                <div className="mt-2 font-bold text-2xl text-gray-700">

                    <h1>Biography</h1>

                </div>

                <div className="text-gray-500 mt-2">

                    <p>Rohit Negi is a very good boy. He is very gareeb because he operates Oppo</p>

                </div>

                <div className="bg-sky-300 rounded-xl p-1 text-white flex justify-center mt-2 hover:bg-sky-800">
                    <button>Know More</button>

                </div>

            </div>

            <div className="max-w-sm overflow-hidden bg-white shadow-md p-4 mt-5 ">

                <div>

                    <img className="w-full h-90 object-cover rounded" src="https://media.licdn.com/dms/image/v2/D5603AQGK1b2Cqjs2rA/profile-displayphoto-shrink_200_200/B56ZcRn.tXHgAY-/0/1748347385332?e=2147483647&v=beta&t=fSSKwIrDtdHAQiR9ynkLxrg9WOJPNgtTviZWqWNnXzw"></img>

                    {/* So to maintain the aspect ratio of the image we used object-cover */}

                    {/* Due to this the image is zoomed out to maintain the image aspect ratio */}

                </div>

                <div className="mt-2 font-bold text-2xl text-gray-700">

                    <h1>Biography</h1>

                </div>

                <div className="text-gray-500 mt-2">

                    <p>Rohit Negi is a very good boy. He is very gareeb because he operates Oppo</p>

                </div>

                <div className="bg-sky-300 rounded-xl p-1 text-white flex justify-center mt-2 hover:bg-sky-800">
                    <button>Know More</button>

                </div>

            </div>

            <div className="max-w-sm overflow-hidden bg-white shadow-md p-4 mt-5 ">

                <div>

                    <img className="w-full h-90 object-cover rounded" src="https://media.licdn.com/dms/image/v2/D5603AQGK1b2Cqjs2rA/profile-displayphoto-shrink_200_200/B56ZcRn.tXHgAY-/0/1748347385332?e=2147483647&v=beta&t=fSSKwIrDtdHAQiR9ynkLxrg9WOJPNgtTviZWqWNnXzw"></img>

                    {/* So to maintain the aspect ratio of the image we used object-cover */}

                    {/* Due to this the image is zoomed out to maintain the image aspect ratio */}

                </div>

                <div className="mt-2 font-bold text-2xl text-gray-700">

                    <h1>Biography</h1>

                </div>

                <div className="text-gray-500 mt-2">

                    <p>Rohit Negi is a very good boy. He is very gareeb because he operates Oppo</p>

                </div>

                <div className="bg-sky-300 rounded-xl p-1 text-white flex justify-center mt-2 hover:bg-sky-800">
                    <button>Know More</button>

                </div>

            </div>

            <div className="max-w-sm overflow-hidden bg-white shadow-md p-4 mt-5 ">

                <div>

                    <img className="w-full h-90 object-cover rounded" src="https://media.licdn.com/dms/image/v2/D5603AQGK1b2Cqjs2rA/profile-displayphoto-shrink_200_200/B56ZcRn.tXHgAY-/0/1748347385332?e=2147483647&v=beta&t=fSSKwIrDtdHAQiR9ynkLxrg9WOJPNgtTviZWqWNnXzw"></img>

                    {/* So to maintain the aspect ratio of the image we used object-cover */}

                    {/* Due to this the image is zoomed out to maintain the image aspect ratio */}

                </div>

                <div className="mt-2 font-bold text-2xl text-gray-700">

                    <h1>Biography</h1>

                </div>

                <div className="text-gray-500 mt-2">

                    <p>Rohit Negi is a very good boy. He is very gareeb because he operates Oppo</p>

                </div>

                <div className="bg-sky-300 rounded-xl p-1 text-white flex justify-center mt-2 hover:bg-sky-800">
                    <button>Know More</button>

                </div>

            </div>

            <div className="max-w-sm overflow-hidden bg-white shadow-md p-4 mt-5 ">

                <div>

                    <img className="w-full h-90 object-cover rounded" src="https://media.licdn.com/dms/image/v2/D5603AQGK1b2Cqjs2rA/profile-displayphoto-shrink_200_200/B56ZcRn.tXHgAY-/0/1748347385332?e=2147483647&v=beta&t=fSSKwIrDtdHAQiR9ynkLxrg9WOJPNgtTviZWqWNnXzw"></img>

                    {/* So to maintain the aspect ratio of the image we used object-cover */}

                    {/* Due to this the image is zoomed out to maintain the image aspect ratio */}

                </div>

                <div className="mt-2 font-bold text-2xl text-gray-700">

                    <h1>Biography</h1>

                </div>

                <div className="text-gray-500 mt-2">

                    <p>Rohit Negi is a very good boy. He is very gareeb because he operates Oppo</p>

                </div>

                <div className="bg-sky-300 rounded-xl p-1 text-white flex justify-center mt-2 hover:bg-sky-800">
                    <button>Know More</button>

                </div>

            </div>
        
        </div>
    )
}







ReactDOM.createRoot(document.getElementById("root")).render(<App></App>);