

const element = React.createElement('h1',{id:"first", className:"Rahul", style:{backgroundColor:"blue", fontSize:"30px", color: "pink"}},"Hello Coder Army");

const element1 = React.createElement('h2',{id:"second", className:"Rahul", style:{backgroundColor:"black", fontSize:"30px", color: "white"}},"Maza aaya mujhe");


const div1 = React.createElement('div',{},[element, element1]);


const Reactroot = ReactDOM.createRoot(document.getElementById('root'));     

Reactroot.render(div1);


// Reactroot.render(element);    

// Reactroot.render(element1);



// element1 is only shown as what render does is that it removes all the previous child of the root and adds element1

// Even if we put h3 and p tag and text inside it, it won't be visible due to render as render has removed the 

// previous child of the root and now element was inserted there but after that element was removed and element1 was rendered

// So to show both we will create a div and then show both element inside it


const para = React.createElement('p',{},"Hello Bhai Log");

const h1 = React.createElement('h1',{},[para]);

const div = React.createElement('div',{},[h1]);


Reactroot.render(div);



// We brought another additional functionality that is JSX (it's not part of React)

// Due to this we can write HTML code only in JS file and then it converts it to React code automatically

// But for now we won't learn it we will try to solve this tedious work by ourself like people used to when react was made




// Like this only people were writing code before in React


// Can we host this code in any server (or can call this code production ready) ?

// We can but this is not optimized code

// There are comments and later if we make it more complex then more problem and react file and react DOM file also comes 

// Due to this file size is also large

// So we will optimize the code first

// Our main aim is website works fast and there is no time to render and all 



// And there's also network call also as it will fetch and read the files to understand React and ReactDOM

// Some will say to save this time we will just copy the whole file here but it would increase our file size

// And we aren't even using all the functionality of the React so it doesn't make sense to copy the whole code

// So we want to reduce our file size for optimization





// So here we use Bundler

// It reads the whole code and makes a bundle for it and that bundle we can use for production 

// Or can say it reads all the codes in HTML files, CSS files, etc and then optimize it (by removing all the unnecessary codes)


// Examples of Bundler are Webpack, vite, parcel

// In this course we will follow parcel

// Vite and Parcel are famous, they all have different algorithms and all with which they optimize code



// So how to install parcel


// package.json keeps our metadata or can say keeps all our information inside our project  

// What is npm though

// npm just means npm only there is no full form for it (although some people call it node package manager)

// But it's meaning is nothing only

// So we can say npm is like all the packages that we use in JS it's their database

// All the packages are stored in this that help us to create good websites 

// Or can say npm stores all JS related packages and all 

// So like if we create something that can help others we will give code to npm only 

// So we want to get any package from npm it's information is stored in package.json

// Hence we first initialize npm in our project

// So when we run npm install parcel we see that dependencies{} gets added in package.json

// And node_modules are also added and install many other folders inside it 

// So why all of this are downloaded when we run command only to install parcel

// Size of this is also 315MB

// It is because when someone created parcel he didn't start from zero to make it, he must have used some other existing libraries and packages

// So parcel is dependent on all those files only

// So for parcel to execute it's code it is using help from these other packages

// So these are dependencies

// So the files parcel is dependent on might be dependent on some other file hence many files are there in node_modules

// so in short all the codes in node_modules will help in functioning of parcel

// So now we won't be needed to write script also in HTML we will directly bring react using npm


// package.json has all the information about on which our project is dependent on and also writes the version too


// Whenever updates come we see version 18.2.3 and something something so what is this

// So it's denoted like Major.Minor.Patch we call first number major update , second number minor update and last number patch

// So if next version comes like 18.2.4 then this means that there were no new features added only bugs were fixed hence patch number was incremented

// Minor update means adding new features or functionality, in this the code won't get errors or phatega nhi new additions se

// So there will be backward compatibility


/*

    Backward compatibility: 

    "New stuff still works with old stuff."

    Example:

        If you update your phone's operating system (like iOS or Android), but your old apps still run fine, 
        
        that update is backward compatible



    A new version of software, system, or tool is backward compatible if it can still use files, features, or data 
    
    from older versions without breaking.

*/


// function sum(a, b)
// {
//     return a+b;
// }


// // Minor update

// function sub(a, b)
// {
//     return a-b;
// }



/*
    Before we were only using sum function but we made minor update of adding sub function

    Due to this the code didn't break and sub function can work fine with the previous code that was written

*/



// Major update means that old code might break using it and it often changes how things work 


function sum(a, b)
{
    return a+b;
}


// Major update

function sum(a, b, c)
{
    return a+b+c;
}

/*

    In this before we were working on 2 parameters but now there's 3 parameters 

    So old code might break

*/


//  " ^ " If there's a caret symbol that means I can accept Minor and Patches or can say only minor and patches will be accepted

// If there's " ~ " symbol then it means only patches are acceptable 

// For Major updates we will be needed to intentionally accept it



// package-lock.json contains all the packages exact version notes down that our code is using 



/*
    " ^ "

    "Allow updates, but only if the update doesn't change the major version"

    It lets you:

            -- Get bug fixes and new features,

            -- Without risking breaking your app from a major update


    " ~ " (tilde)

    "Allow patch updates, but lock the minor version"

    You want stability but still want small bug fixes

*/


// When we share our project to someone it is not recomended to send the node_modules in the data only 

// As it's size is 300MB something so we won't send node modules folder in github also

// So we will only share our project code + package.json + package-lock.json

// So when other person gets these files he only needs to enter command npm install

// It sees the package-lock.json file and downloads the versions mentioned in that file 

// Some people just delete package-lock.json file so then it will see package.json file

// Then it will see dependencies and will download the given version and as there's caret symbol (^) also

// So if there's any minor update or patch then it will download that too



// In short minor update doesn't update old code only new functionality is added
// Patch update fixes bugs
// Major update changes old code + new functionality can be added

