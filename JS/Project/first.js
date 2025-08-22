

// This is data from zomato backend we see

// Won't use zomato data as too complex for now

// Zomato and all have encrypted API as they cannot deal with random requests for testing

// We will only play on 11 data we have mentioned in README.md







// Using old method here to generate data



const restaurant = [];

const images = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];

const res_name = [ "The Golden Spoon",
  "Urban Bites",
  "Spice Symphony",
  "Olive & Thyme",
  "The Hungry Fork",
  "Saffron Garden",
  "Luna Bistro",
  "Red Lantern Grill",
  "Harvest Table",
  "Blue Ocean Diner",
  "Crimson Plate",
  "Copper Pot Kitchen",
  "Savory Street",
  "The Rustic Oven",
  "Pearl & Pine",
  "Midnight Market",
  "The Velvet Table",
  "Echo & Ember",
  "Whisk & Ladle",
  "Maple & Main"];

const foodTypes = [ "Italian",
  "Mexican",
  "Chinese",
  "Indian",
  "Thai",
  "Japanese",
  "Mediterranean",
  "American",
  "French",
  "Korean"];

const delhiLocations = [
  "India Gate",
  "Red Fort",
  "Qutub Minar",
  "Lotus Temple",
  "Humayun's Tomb",
  "Akshardham Temple",
  "Jama Masjid",
  "Rashtrapati Bhavan",
  "Connaught Place",
  "Lodhi Garden"
];


  for(let i=0;i<100;i++)
  {
    const obj = {};

    obj["image"] = images[Math.floor(Math.random()*10)];

    obj["name"] = res_name[Math.floor(Math.random()*20)];

    obj["rating"] = Math.floor((Math.random()*5)+1);

    obj["food_type"] = foodTypes[Math.floor(Math.random()*10)];

    obj["price_for_two"] = Math.floor((Math.random()*2401)+100);

    obj["location"] = delhiLocations[Math.floor(Math.random()*10)];

    obj["Distance_from_Customer_house"] = ((Math.random()*10)+1).toFixed(1);                  // Gives answer till one place of decimal

    obj["offers"] = Math.floor(Math.random()*30);

    obj["alcohol"] = Math.random() > 0.7;                               // In 70% of restaurant we want that they don't serve alcohol so will return false if < 0,7

    obj["Restaurant_open_time"] = Math.floor(Math.random()*24);

    obj["Restaurant_close_time"] = (obj["Restaurant_open_time"] + 12) % 24;

    restaurant.push(obj);

  };


console.log(restaurant);


// Due to this copied whole data on JSON file

const JSON_data = JSON.stringify(restaurant, null, 2);                  // Converts array to JSON 

const fs = require("fs");                                         // Used to get file system

fs.writeFile("arrayData.json", JSON_data , (err) => {             // Writing to file to copy whole data
  if (err) {
    console.error("Error writing file:", err);
  } else {
    console.log("JSON file saved successfully.");
  }
});