import express from 'express';
import { userRouter } from './routes/user'
import mongoose from 'mongoose';
import { config } from 'dotenv';
import passport = require('passport');

require('./Middleware/auth');

config();

import { env } from './config/globals';


(async () => {
    try {
        await mongoose.connect(env.DATABASE_HOST)
        console.log("Database connected")
    } catch (err) {
        console.log('error: ' + err)
    }
})()

const app = express();
app.use(passport.initialize());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(userRouter);

app.use('/api/', userRouter);

app.listen(env.PORT, () => {
    console.log(`server started on port ${env.PORT}`);
})