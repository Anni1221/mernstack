import { Router } from 'express';
const router = Router();
import { getNotes, createNote, getNote, updateNote, deleteNote } from '../controllers/notesC.js';

router.route('/')
  .get(getNotes)
  .post(createNote);

router.route('/:id')
  .get(getNote)
  .put(updateNote)
  .delete(deleteNote);

export default router;