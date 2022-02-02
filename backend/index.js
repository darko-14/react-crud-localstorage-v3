import express from 'express'
import db from './config/db.js'
import router from './routes/routes.js'
import cors from 'cors'

const app = express();

try {
    await db.authenticate();
    console.log('Database connected');
    await db.sync();
    console.log('Database synced');
} catch (error) {
    console.error('Connection error:', error);
}

app.use(cors());
app.use(express.json());
app.use('/contacts', router);
 
app.listen(4000, () => console.log('Server running at port 4000'));