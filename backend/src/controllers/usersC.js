import User from '../models/userM.js';

export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json('Error al obtener usuarios');
  }
};

export const createUser = async (req, res) => {
  const { username, author } = req.body;
  const newUser = new User({
    username: username,
    author: author
  });
  try {
    await newUser.save();
    res.json('Usuario guardado');
  } catch (error) {
    console.error(error);
    res.status(500).json('Error al guardar usuario');
  }
};

export const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json('Usuario eliminado');
  } catch (error) {
    console.error(error);
    res.status(404).json('Usuario no encontrado');
  }
};