
const obj = document.getElementById('root');



function timer(){
    let d1 = new Date();

    let d2 = new Date("2028-07-14");

    let d3 = d2 - d1;

    let days = Math.floor(d3/(1000*60*60*24));

    let hours = Math.floor((d3/(1000*60*60))%24);

    let minutes = Math.floor((d3/(1000*60))%60);

    let seconds = Math.floor((d3/(1000))%60);

    obj.innerHTML = `Olympic CountDown :  ${days} Days   ${hours} Hours   ${minutes} Minutes   ${seconds} Seconds`;

};

setInterval(timer,1000);


obj.style.backgroundColor = "pink";

obj.style.height = "100vh";

obj.style.display = "flex";

obj.style.justifyContent = "center";

obj.style.alignItems = "center";

obj.style.fontSize = "50px";

obj.style.color = "white";