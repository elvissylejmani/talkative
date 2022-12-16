import { Schema, model, Document } from 'mongoose';
import bcrypt from "bcrypt";


interface IUser extends Document {
    name: String,
    user_name: String,
    email: String,
    birth_day: String,
    password: String,
    token?: String
}

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    user_name: {
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

userSchema.pre(
    'save',
    async function (next) {
        const user = this;
        const hash = await bcrypt.hash(this.password, 10);

        this.password = hash;
        next();
    }
);

userSchema.methods.isValidPassword = async function (password: string) {
    const user = this;
    const compare = await bcrypt.compare(password, user.password);

    return compare;
}

const User = model("User", userSchema);

export { User };