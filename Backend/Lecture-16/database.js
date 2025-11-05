

const mongoose = require('mongoose');

const url = "mongodb+srv://coderArmy9:Hunter%409Bhai@codingadda.ozs5ize.mongodb.net/Instagram";

async function main()
{
    await mongoose.connect(url);
}

module.exports = main;