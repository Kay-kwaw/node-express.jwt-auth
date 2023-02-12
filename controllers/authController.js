const User = require('../models/User');
//handle errors
const handleErrors = (err)=>{
    console.log(err.message, err.code);
    //This is the object that will be sent to the user as json 
    let error = {email: "", password: "", };

    //Validation errors
    if(err.message.includes('user validation failed')){
        console.log(Object.values(err.errors));
    }
}


module.exports.signup_get = (req, res, next) =>{
    res.render('signup');
};

module.exports.signup_post = async(req, res) => {
    const {email, password} = req.body;

    try{
    const user= await User.create({email,password});
    res.status(200).json(user);
    }
    catch(err){

       const errors = handleErrors(err);
        res.status(500).send("");
    };
};

module.exports.login_get = (req, res) => {
    
    res.render('login');
};

module.exports.login_post = async (req, res) => {
    const {email, password} = req.body;

    console.log(email, password);
   
    res.send('user login');
};