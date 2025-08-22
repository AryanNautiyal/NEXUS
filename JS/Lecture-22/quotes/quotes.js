const quotes = [
  "The only way to do great work is to love what you do. — Steve Jobs",
  "In the middle of every difficulty lies opportunity. — Albert Einstein",
  "Success is not final, failure is not fatal: It is the courage to continue that counts. — Winston Churchill",
  "Life is what happens when you're busy making other plans. — John Lennon",
  "The future belongs to those who believe in the beauty of their dreams. — Eleanor Roosevelt",
  "Be the change that you wish to see in the world. — Mahatma Gandhi",
  "Do not watch the clock. Do what it does. Keep going. — Sam Levenson",
  "Happiness is not something ready-made. It comes from your own actions. — Dalai Lama",
  "The only limit to our realization of tomorrow is our doubts of today. — Franklin D. Roosevelt",
  "It does not matter how slowly you go as long as you do not stop. — Confucius",
  "If you want to lift yourself up, lift up someone else. — Booker T. Washington",
  "The best way to predict the future is to create it. — Peter Drucker",
  "Believe you can and you're halfway there. — Theodore Roosevelt",
  "You miss 100% of the shots you don’t take. — Wayne Gretzky",
  "Strive not to be a success, but rather to be of value. — Albert Einstein",
  "Everything you’ve ever wanted is on the other side of fear. — George Addair",
  "The only person you are destined to become is the person you decide to be. — Ralph Waldo Emerson",
  "Your time is limited, don’t waste it living someone else’s life. — Steve Jobs",
  "Act as if what you do makes a difference. It does. — William James",
  "Life is either a daring adventure or nothing at all. — Helen Keller"
];

function generatequote()
{
    let index = Math.floor((Math.random()*20)+0);

    const text = document.getElementById('quote');

    text.innerHTML = quotes[index];
};

setInterval(generatequote, 3000);


// const colors = [
//   "#FF5733",         // Red-Orange
//   "#33FF57",         // Bright Green
//   "#3357FF",         // Vivid Blue
//   "#FF33F5",         // Hot Pink
//   "#33FFF5",         // Cyan
//   "#F5FF33",         // Yellow
//   "#8A2BE2",         // Blue Violet
//   "#FF6347",         // Tomato
//   "#7FFFD4",         // Aquamarine
//   "#FFD700",         // Gold
//   "rgb(255, 99, 71)",// Tomato (RGB)
//   "rgb(75, 192, 192)",// Teal
//   "rgb(153, 102, 255)",// Purple
//   "rgb(255, 159, 64)",// Orange
//   "rgb(54, 162, 235)",// Sky Blue
//   "rgb(255, 206, 86)",// Mustard Yellow
//   "rgb(255, 0, 0)",  // Pure Red
//   "rgb(0, 255, 0)",  // Pure Green
//   "rgb(0, 0, 255)",  // Pure Blue
//   "black"            // Black
// ];



function lizard(){

    const obj = document.getElementById('bd');

    let idx1 = Math.floor((Math.random()*266)+0);

    let idx2 = Math.floor((Math.random()*266)+0);

    let idx3 = Math.floor((Math.random()*266)+0);

    bd.style.backgroundColor = `rgb(${idx1},${idx2},${idx3})`;
}

setInterval(lizard, 3000);