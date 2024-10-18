import express from 'express';
import { getUserForSideBar } from '../controllers/user.controller.js';
import verifyUser from '../utills/verifyUser.js';

const router = express.Router();


router.get('/' ,verifyUser, getUserForSideBar) ;


export default router;