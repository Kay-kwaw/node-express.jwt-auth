const User = require('../models/User');
//handle errors


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
        console.error(err);
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