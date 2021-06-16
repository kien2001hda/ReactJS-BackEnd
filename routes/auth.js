import express from 'express';
import { signup, signin, signout } from '../controllers/auth'
import { userSignupValidator } from '../validator';


const router = express.Router();

router.post('/signin', signin);
router.post('/signup', userSignupValidator, signup);
router.get('/signout', signout);




module.exports = router;