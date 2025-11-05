
const mongoose = require('mongoose')

const {Schema} = mongoose;


// Data Validation and Data Sanitation

/*

    What is validation ?

    To put constraints to validate data that is in DB 

    Data validation is the process of ensuring data is accurate, complete, and correct by checking it against predefined 
    rules before it is used

*/

const userSchema = new Schema({
    firstName : {
        type: String,
        required : true,
        minLength:3,
        maxLength:20
    },
    lastName : {
        type: String
    },
    age : {
        type: Number,
        min:14,
        max:70,
        required:true
    },
    gender : {
        type: String,
        // enum: ["male","female","others"]                // If anyone enters data except the ones mentioned in enum then not accepted
        validate(value){
            if(!["male","female","others"].includes(value))
                throw new Error("Invalid Gender")
        }
        // These are validation function
    },
    emailId : {
        type: String,
        required:true,
        unique:true,
        trim: true,                                      
        
        // User can enter email id like this "  123@gmail.com  " and other person can have same email id as "123@gmail.com" 
        
        // so it's not unique so will trim blank spaces

        lowercase : true,
        immutable: true
        
        // It's not throwing error even when we try to change email Id but in DB we don't see change in email Id

        // So here our API level validation comes in picture
                                         
    },
    password : {
        type : String
    },
    photo : {
        type : String,
        default: "This is the default photo"
    }
}, {timestamps:true});

// Used to see timestamp for data creation and data updation time stamps (like to see active users on website and etc)

const User = mongoose.model("user",userSchema);

module.exports = User;


// So all the data validation that we were doing here is at schema level and all the validation we do in index.js is API level 

// As we are handling API calls in there

// So why we need API level validation 

// As schema level validation involves network or can say DB calls which has a cost when we work in companies 

// So cost will be high that we will be needed to pay if our DB calls are too many

// Hence we try to lessen our DB calls and try to validate it at API level

// So our cost is being saved and also user experience is also good as they will get fast responses as no need for DB call