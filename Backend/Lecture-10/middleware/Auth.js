

const Auth = (req,res,next)=>{     

    const token = "ABCDEF";

    const Access = token === "ABCDEF"?1:0;

    if(Access){

        next();
    }
    else
    {
        res.status(403).send("Permission not granted");
    }

};

module.exports = {Auth};