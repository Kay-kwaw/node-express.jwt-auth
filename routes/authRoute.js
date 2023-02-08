//We require router from the express package and then export it
const { Router } = require('express');
const authController = require('../controllers/authController');

//Creating an instance of the router
const router = Router();
//When a request comes in its going to fire the function in the authController
router.post('/signup',authController.signup_post );
router.get('/signup', authController.signup_get );
router.post('/login', authController.login_post );
router.get('/login', authController.login_get );
// router.get('/', function (req, res) {} );


//Exportation of the router from the express package
module.exports = router;