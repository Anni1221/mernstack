import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    author: String
}, {
    timestamps: true
});

export default model('User ', userSchema);