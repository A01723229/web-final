import { Request, Response, NextFunction } from 'express';
import StudentController from '../controllers/student';

const studentController = new StudentController();

class StudentHttpHandler {
    async login(req: Request, res: Response, next: NextFunction) {
        try {
            const { username, password } = req.body;
            const result = await studentController.login({ username, password });
            res.json(result);
        } catch (error) {
            next(error);
        }
    }
}

export default StudentHttpHandler;
