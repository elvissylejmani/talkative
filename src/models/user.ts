import mongoose from 'mongoose';

interface IUser extends mongoose.Document {
    name: String,
    last_name: String,
    email: String,
    birth_day: String,
    password: String,
    token?: String
}

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    birth_day: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
});

const User = mongoose.model("User", userSchema);

export { User };