import express from 'express'
// import db from './config/db.js'
import mysql from 'mysql2';
// import router from './routes/routes.js'
import cors from 'cors'

const app = express();

// try {
//     await db.authenticate();
//     console.log('Database connected');
//     await db.sync();
//     console.log('Database synced');
// } catch (error) {
//     console.error('Connection error:', error);
// }

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'darko',
    database: 'list_of_contacts'
});

connection.connect(err => {
    err ? console.error('Connection failed.', err) : console.log('Connection established.');
})

app.use(cors());
app.use(express.json());
// app.use('/contacts', router);
 
app.listen(4000, () => console.log('Server running at port 4000'));

app.get('/contacts', (req, res) => {
    connection.query('SELECT * FROM contacts', (err, rows, fields) => {
        err ? console.log(err) : res.send(rows )
    })
})