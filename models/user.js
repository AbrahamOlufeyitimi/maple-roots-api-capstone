import knexConfig from '../knexfile.js';
import initKnex from 'knex';
const knex = initKnex(knexConfig);

const createUser = async (user) => {

  try {
    const [id] = await knex('users').insert(user);
    return id;
    
  } catch (error) {
    console.error(error);
  }
};

const getUserById = (id) => {
  return knex('users').where({ id }).first();
};

const getAllUsersFromDB = () => {
  return knex('users').select('*');
}

const editUser = async (id, updatedUser) => {
  await knex('users').where({ id }).update(updatedUser);
  return knex('users').where({ id }).first();
}

export { createUser, getUserById, getAllUsersFromDB, editUser };
