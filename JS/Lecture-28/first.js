
// Based on month : size 12


const zodiacSigns = [
        "Capricorn", "Aquarius", "Pisces", "Aries", "Taurus", "Gemini",
        "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius"
    ];



// Based on date : size 31

const compliments = [
  "You light up every room you walk into.",
  "Your smile is contagious.",
  "You're a true original.",
  "Your presence makes everything better.",
  "You have a heart of gold.",
  "You inspire people without even trying.",
  "You have a great sense of humor.",
  "You're someone others can always count on.",
  "Your energy is magnetic.",
  "You're a breath of fresh air.",
  "You're incredibly thoughtful.",
  "You make the world a better place.",
  "You're more talented than you know.",
  "You always know the right thing to say.",
  "You bring out the best in people.",
  "You're full of amazing ideas.",
  "You have a great taste in everything.",
  "You’re a natural leader.",
  "You have a beautiful soul.",
  "You make life more fun.",
  "Your kindness is truly extraordinary.",
  "You're a fantastic listener.",
  "You’ve got an amazing sense of style.",
  "Your confidence is inspiring.",
  "You're stronger than you think.",
  "You have an infectious laugh.",
  "You bring joy wherever you go.",
  "Your mind is incredibly sharp.",
  "You’re an amazing friend.",
  "You're a positive force in the universe.",
  "The world is lucky to have you."
];



// Size 20

const victimCardCompliments = [
    "You always do good to others but don't get it in return.",
    "You care so deeply, yet no one seems to notice.",
    "You're the one who always listens, but no one asks if you're okay.",
    "You give your best, but people still take you for granted.",
    "You're always there for everyone, but they disappear when you need them.",
    "You forgive so easily, and people just keep hurting you.",
    "You're so understanding, but they call you too sensitive.",
    "You help everyone succeed, but no one celebrates your wins.",
    "You're always putting others first, and they don’t even realize it.",
    "You never ask for anything, yet they still say you’re demanding.",
    "You always show up, but somehow they forget you were there.",
    "You speak kindly, but your words are often ignored.",
    "You sacrifice your time, but no one acknowledges it.",
    "You stay loyal, and still they doubt your intentions.",
    "You always try to make peace, but they label you as weak.",
    "You give second chances, and they keep breaking your trust.",
    "You try to see the good in people, but they see it as naivety.",
    "You’re always the bigger person, yet they think you’re easy to manipulate.",
    "You support everyone’s dreams, and they forget yours.",
    "You carry everyone’s burdens, and they call you dramatic when you're tired."
];




// size is 30

const recommendations = [
    "Feed a street dog today — your kindness matters more than you think.",
    "Write a kind note to a stranger and leave it somewhere public.",
    "Water a plant that's not yours — nature thanks you quietly.",
    "Help someone carry their groceries without expecting anything in return.",
    "Compliment a coworker on something they did well.",
    "Donate a book you love to a local library or shelter.",
    "Call someone you haven’t spoken to in a while just to check in.",
    "Clean up a small public space — even a few minutes makes a difference.",
    "Buy a meal or snack for someone who might need it.",
    "Share a free resource online that helped you recently.",
    "Volunteer for one hour this week, even virtually.",
    "Leave encouraging messages in a public place with sticky notes.",
    "Support a small local business with a review or recommendation.",
    "Offer to help a neighbor with a chore or errand.",
    "Send a voice note to a friend saying why you appreciate them.",
    "Pick up trash in your neighborhood during a walk.",
    "Give someone your full attention in a conversation — no phone, no rush.",
    "Make or buy a meal for someone going through a hard time.",
    "Leave a kind comment on a small creator’s post.",
    "Share a personal story that might help someone feel less alone.",
    "Let someone go ahead of you in line — especially if they seem rushed.",
    "Donate clothes you haven't worn in the past year.",
    "Teach someone something you know without expecting anything back.",
    "Write a thank-you message to a teacher, mentor, or role model.",
    "Share your umbrella with someone if it’s raining.",
    "Smile at five strangers today — without waiting for one back.",
    "Offer to babysit or help a tired parent for an hour.",
    "Leave a few coins in a vending machine for the next person.",
    "Plant something — anything — and take care of it.",
    "Tell someone they made a difference in your life."
];



// size is 20

const predictions = [
  "You will become a crorepati sooner than you think.",
  "One day, your story will inspire millions.",
  "You’re going to live the life you once dreamed of.",
  "Your hard work will finally pay off big time.",
  "Soon, you’ll travel to a place you’ve always wanted to visit.",
  "You will receive unexpected money that changes your life.",
  "You’ll be known for something amazing you create.",
  "A golden opportunity is coming your way — be ready.",
  "You’ll meet someone who completely changes your perspective.",
  "Your name will be associated with success and kindness.",
  "You’ll build something that lasts for generations.",
  "Fame will find you in the most unexpected way.",
  "You’re about to attract the right people into your life.",
  "You’ll wake up one day and realize you're truly happy.",
  "You will be the reason someone doesn’t give up.",
  "Your passion will turn into a profitable business.",
  "You’ll soon make a decision that transforms your life.",
  "Everything you lost will be replaced with something better.",
  "You’ll buy something you once thought you couldn’t afford.",
  "The future version of you is already proud of how far you’ve come."
];



const form = document.getElementById('astroForm');

form.addEventListener('submit', (event)=>{

    event.preventDefault();

    const Name = document.getElementById('firstName').value;

    const surName = document.getElementById('surname').value;

    const Day = document.getElementById('day').value;

    const Month = document.getElementById('month').value;

    const Year = document.getElementById('year').value;

    console.log(Name, surName, Day,Month,Year);

    const result = document.getElementById('result');

    const first_message = `Hello ${Name} ${surName}.`;

    const second_message = `Your Zodiac sign is ${zodiacSigns[Month-1]}`;

    const third_message = compliments[Day-1];

    let index = Math.floor(Math.random()*20);

    const fourth_message = victimCardCompliments[index];

    const fifth_message = recommendations[(Name.length * surName.length * Number(Year))%30];

    index = (Number(Day)*Number(Month)*Number(Year))%20;

    const sixth_message = predictions[index];

    result.innerText = `${first_message} ${second_message} ${third_message} ${fourth_message} Our Recommendation for you: ${fifth_message}  Your Future Prediction is: ${sixth_message}`;


})


