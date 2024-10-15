import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const noteSchema = new Schema({
  title: String,
  content: {
    type: String,
    required: true
  },
  author: String,
  date: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

export default model('Note', noteSchema);