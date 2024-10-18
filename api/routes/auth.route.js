import express from 'express';
import { signUp , logIn , logOut} from '../controllers/auth.controller.js';


const router = express.Router()

router.post('/sign-up' , signUp);
router.post('/login' , logIn);
router.get('/logout' , logOut);




export default router ; 