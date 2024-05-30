import express from 'express';
import bodyParser from 'body-parser';
import usersRoutes from './routes/users.js'; // Ensure the path is correct

const app = express();
const PORT = 5000;


app.listen(PORT, () => console.log(`Server Running on port: http://localhost:${PORT}`));
app.use(bodyParser.json());
app.use('/users', usersRoutes);

app.get('/', (req, res) => res.send('Hello Homepddfsdfssage.'));

console.log("test")