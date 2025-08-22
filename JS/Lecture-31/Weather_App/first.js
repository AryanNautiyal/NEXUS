
const button = document.getElementById('search-btn').addEventListener('click', ()=>{

    const place = document.getElementById('city-input').value;

    const prom = fetch(`http://api.weatherapi.com/v1/current.json?key=3f4a80ceecab4a57b3793754251908&q=${place}&aqi=yes`);

    function updateTemp(data){

        const element = document.getElementById('weather-info');

        element.innerHTML = `Today's Temperature : ${data.current.temp_c}`;

    }

    prom
    .then(response=>response.json())
    .then(data=>updateTemp(data))
    .catch(error=>{
        document.getElementById('error-message').style.display = 'block';
    });
    
})