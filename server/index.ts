import express from 'express';
import cors from 'cors';
import studentRoutes from './src/routes/student';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', studentRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
