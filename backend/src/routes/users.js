import { Router } from 'express';
const router = Router();
import { getUsers, createUser, deleteUser } from '../controllers/usersC.js';

router.route('/')
    .get(getUsers)
    .post(createUser)

router.route('/:id')
    .delete(deleteUser)

export default router;