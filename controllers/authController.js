const User = require('../models/User');
 //handle errors
 const handleErrors = (err)=>{
    console.log(err.message, err.code);
    // This is the object that will be sent to the user as json 
    let errors = {email: '', password: '' };
 

    //Validation errors
    if (err.message.includes('user validation failed')) {
        Object.values(err.errors).forEach(
            ({properties}) => {
                errors[properties.path] = properties.message;
             });
    }
}



module.exports.signup_get = (req, res, next) =>{
    res.render('signup');
};

// module.exports.signup_post = (req, res, next) =>{ 
//     res.send('signup');
// }
module.exports.signup_post = async(req, res) => {
    const { email, password } = req.body;

    try{
    const user= await User.create({ email,password });
    res.status(400).json(user);
    }
    catch(err){
       const errors =
        handleErrors(err);
        res.status(201).json({ errors });
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