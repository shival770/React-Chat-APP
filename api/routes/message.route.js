import express from 'express';
import verifyUser from '../utills/verifyUser.js';
import { getMessage, sendMessage } from '../controllers/message.controller.js';

const router = express.Router();


router.get('/:id' ,verifyUser,  getMessage);
router.post('/send/:id' ,verifyUser,  sendMessage);



export default router ;