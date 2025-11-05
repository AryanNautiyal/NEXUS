

const response = await fetch('https://api.example.com/data',{
    method : 'POST',
    headers : {
        'Content-Type' : 'application/json'
    },
    body : JSON.stringify({name : 'John', age : 30})
});


// If method not mentioned then it by default takes it GET

