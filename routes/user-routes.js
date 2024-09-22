import express from 'express';
import { addUser, getAllUsers, userByID, updateUser } from '../controllers/user-controller.js';
import * as userController from '../controllers/user-controller.js';

const router = express.Router();
router.post('/', userController.addUser);

router.get('/:id', userController.userByID)
router.put('/:id', updateUser);
router.get('/all', userController.getAllUsers);

export default router;
