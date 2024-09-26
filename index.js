import express from 'express';
import dotenv from 'dotenv'
import { connectDB } from './config/db.js'; 
import cors from 'cors';
import path from 'path';


import bookRoute from './routes/book.route.js'
import userRoute from './routes/user.route.js'
import contactRoute from './routes/contact.route.js'

dotenv.config()
const PORT = process.env.PORT || 4000
const app = express();

//Middlewares
app.use(cors());
app.use(express.json());


//Defining routes
app.use('/books', bookRoute);
app.use('/user', userRoute);
app.use('/contact', contactRoute);


// deployment
if(process.env.NODE_ENV==='production') {
    const dirPath = path.resolve();
    app.use(express.static('frontend/dist'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(dirPath, 'frontend', 'dist' , 'index.html'));
        // res.sendFile(path.join(dirPath, 'frontend/dist/index.html'));
    }) 
}


app.listen(PORT , () =>{
    connectDB();
    console.log(`Server is running on http://localhost:${PORT}`);
});