import StudentDB from '../db/student';
import { LoginRequest, LoginResponse } from '../types/student';

class StudentController {
    async login(credentials: LoginRequest): Promise<LoginResponse> {
        const { username, password } = credentials;
        const foundStudent = await StudentDB.findStudent(username, password);

        if (foundStudent) {
            return {
                fullName: foundStudent.fullName,
                favoriteBook: foundStudent.favoriteBook
            };
        } else {
            throw new Error('Usuario o contrasena no validos.');
        }
    }
}

export default StudentController;
