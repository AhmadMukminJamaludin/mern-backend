import express from "express";
import { DeleteUser, getUsers, getUsersById, storeUser, UpdateUser } from "../controllers/UserController.js";

const router = express.Router();

router.get('/users', getUsers);
router.get('/users/:id', getUsersById);
router.post('/users', storeUser);
router.put('/users/:_id', UpdateUser);
router.delete('/users/:_id', DeleteUser);

export default router;