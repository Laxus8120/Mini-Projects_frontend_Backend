import express from "express";
import {authenticate} from "../middleware/authenticate.js"
import { signup, login } from "../controller/user-controller.js";

import{taskCreate} from "../controller/Task_controller.js"

const router = express.Router();

// for new user we need his signIN first
router.post('/signup',signup);
router.post('/login', login);

// Now, using middleware authenticate we check if the user have valid JWt token or NOT 
router.post('/task',authenticate,taskCreate)





export default router;