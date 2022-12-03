import express from 'express';
import { userRouter } from './routes/user'
import mongoose from 'mongoose';

const app = express();

mongoose
    .connect('mongodb://127.0.0.1:27017/talkative?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false', {})
    .then((db) => console.log("db is connected"))
    .catch((err) => console.log(err));

app.use(userRouter);

app.use('/api/', userRouter);

app.listen(3000, () => {
    console.log('server started');
})