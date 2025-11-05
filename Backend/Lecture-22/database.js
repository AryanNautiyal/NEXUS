




const mongoose = require('mongoose');

async function main()
{
    await mongoose.connect(process.env.DB_CONNECT_KEY);
}

// process.env is a global object

// So how are our keys inside the process.env so it doesn't automatically happen so for this to happen we need to install dotenv

// So dotenv will just take our keys inside process.env (global object)

module.exports = main;