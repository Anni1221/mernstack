import Note from '../models/noteM.js';

export const getNotes = async (req, res) => {
  try {
    const notes = await Note.find();
    res.json(notes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener notas' });
  }
};

export const createNote = async (req, res) => {
  const { title, content, date, author } = req.body;
  const newNote = new Note({
    title: title,
    content: content,
    date: date,
    author: author
  });
  try {
    await newNote.save();
    res.json('Nota guardada');
  } catch (error) {
    console.error(error);
    res.status(500).json('Error al guardar nota');
  }
};

export const getNote = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    res.json(note);
  } catch (error) {
    console.error(error);
    res.status(404).json('Nota no encontrada');
  }
};

export const updateNote = async (req, res) => {
  try {
    const note = await Note.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json('Nota actualizada');
  } catch (error) {
    console.error(error);
    res.status(404).json('Nota no encontrada');
  }
};

export const deleteNote = async (req, res) => {
  try {
    await Note.findByIdAndDelete(req.params.id);
    res.json('Nota eliminada');
  } catch (error) {
    console.error(error);
    res.status(404).json('Nota no encontrada');
  }
};