import { Student } from "../types/student";

class StudentDB {
    private students: Student[] = [
        { username: "ana.t", password: "libro123", fullName: "Ana Torres", favoriteBook: "Cien Años de Soledad" },
        { username: "marco.r", password: "lectura456", fullName: "Marco Ramirez", favoriteBook: "El Principito" },
        { username: "sofia.m", password: "novela789", fullName: "Sofia Morales", favoriteBook: "Orgullo y Prejuicio" }
    ];

    async findStudent(username: string, password: string): Promise<Student | null> {
        const found = this.students.find(
            student => student.username === username && student.password === password
        );
        return found ?? null;
    }
}

export default new StudentDB();
