import express from 'express';
import StudentHttpHandler from '../handlers/student';

const router = express.Router();
const studentHttpHandler = new StudentHttpHandler();

router.post('/login', studentHttpHandler.login);

export default router;
