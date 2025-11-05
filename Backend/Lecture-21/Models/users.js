


const mongoose = require('mongoose')

const {Schema} = mongoose;

const jwt = require('jsonwebtoken');

const bcrypt = require('bcrypt');




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

        validate(value){
            if(!["male","female","others"].includes(value))
                throw new Error("Invalid Gender")
        }
    },
    emailId : {
        type: String,
        required:true,
        unique:true,
        trim: true,                                      
        lowercase : true,
        immutable: true                                      
    },
    password : {
        type : String,
        required:true
    },
    photo : {
        type : String,
        default: "This is the default photo"
    }
}, {timestamps:true});


// This is how we create methods 

// Not much need to use it but just for knowledge



userSchema.methods.getJWT = function(){

    const ans = jwt.sign({_id:this._id, emailId:this.emailId}, process.env.SECRET_KEY); 

    return ans;

}

// So whoever calls it (obviously an object will call) so done this here so it will point to that object only 

// Don't use ()=>{} here as this keyword meaning is changed here 



userSchema.methods.verifyPassword = async function(userPassword){

    const ans = await bcrypt.compare(userPassword, this.password);

    return ans;

}





const User = mongoose.model("user",userSchema);

// Means we are creating class here

module.exports = User;





// These functions and static functions we won't use much but see them once 