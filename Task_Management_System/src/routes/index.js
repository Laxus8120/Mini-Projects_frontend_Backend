import express from "express";
import {authenticate} from "../middleware/authenticate.js"

import { signup, login } from "../controller/user-controller.js";

import{taskCreate,getAll,update,destroy} from "../controller/Task_controller.js"

import{subTaskCreate,getAllSubTask,updateSubTask,destroySubTask} from "../controller/subTask_controller.js"


const router = express.Router();

// for new user we need his signIN first
router.post('/signup',signup);
router.post('/login', login);

// Now, using middleware authenticate we check if the user have valid JWt token or NOT 
router.post('/task',authenticate,taskCreate);
router.get('/getAll',authenticate,getAll);
router.patch('/update/:id',update);
router.delete('/delete/:id',destroy);

// creation of subTask

router.post('/subTask',authenticate,subTaskCreate);
router.get('/getAllsubTask',authenticate,getAllSubTask);
router.patch('/updateSubTask/:id',updateSubTask);
router.delete('/deleteSubTask/:id',destroySubTask);

export default router;