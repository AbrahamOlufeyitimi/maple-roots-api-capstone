import knex from 'knex';
import { createUser, getAllUsersFromDB, getUserById, editUser } from '../models/user.js';

const addUser = async (req, res) => {
  const { name, school } = req.body;
  console.log(req.body);

  if (!['SMU', 'Dalhousie University'].includes(school)) {
    return res.status(400).json({ message: 'Invalid school' });
  }

  const newUser = { name, school };
  try {
    const userId = await  createUser(newUser);

    res.status(201).json({ id: userId, name, school });
  } catch (error) {
    res.status(500).json({ message: 'Error creating user', error});
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const updatedUser = req.body;

  try {
    const edit = await editUser(id, updatedUser);
    res.status(200).json(edit);
  } catch (error) {
    res.status(500).json({ message: 'Error updating user', error: error.message });
  }
}


const userByID = async (req, res) => {
  const { id } = req.params;
  try {
    const person = await getUserById(id);
    if (!person) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(person);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user by id', error: error.message });
    
  }
}


const getAllUsers = async (req, res) => {
  try {
    const users = await getAllUsersFromDB();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users' });
  }
};

export { addUser, getAllUsers, userByID, updateUser };
