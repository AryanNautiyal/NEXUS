


const validator = require('validator');

function validUser(data)
{

    const mandatoryField = ["firstName","emailId","age","password"];

    const IsAllowed = mandatoryField.every((keys)=> Object.keys(data).includes(keys));

    if(!IsAllowed)
    {
        throw new Error("Fields Missing");
    }

    // Email validation

    if(!validator.isEmail(data.emailId))
    {
        throw new Error("Invalid Email");
    }

    // Password Validation

    if(!validator.isStrongPassword(data.password))
    {
        throw new Error("Weak Password")
    }

    // First Name validation

    if(!(data.firstName.length >= 3 && data.firstName.length <= 20))
    {
        throw new Error("Name should have atleast 3 characters and atmost 20 characters");
    }

    // Age Validation

    if(!(data.age >= 14 && data.age <= 70))
    {
        throw new Error("Age should be in the range 14-70");
    }

}

module.exports = validUser;