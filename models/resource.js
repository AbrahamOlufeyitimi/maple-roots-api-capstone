
import knexConfig from '../knexfile.js';
import initKnex from 'knex';
const knex = initKnex(knexConfig);


const createResource = async (resource) => {


  try {
    const [id] = await knex('resources').insert(resource);
    return id;
      
  } catch (error) {
    console.error('Error inserting resource into DB: ', error.message);
    throw error;
  }
};


const getResourcesBySchool = (school) => {
  return knex('resources').where({ school, completed: false });
};

const resourceById = (id) => {
  return knex('resources').where({ id }).first();
};

const editResource = async (id, updatedResource) => {
  await knex('resources').where({ id }).update(updatedResource);
  return knex('resources').where({ id }).first();
}

const markResourceCompleted = (resourceId) => {
  return knex('resources').where({ id: resourceId }).update({ completed: true });
};

const getAllResourcesFromDB = (school) => {
  return knex('resources').select('*').where({ school });
}

const deleteResourceById = async (id) => {
  try {
    const result = await knex('resources')
      .where({ id })
      .del();
    
    return result;
  } catch (error) {
    console.error(error);
    throw error;   }
};

export { getResourcesBySchool, markResourceCompleted, getAllResourcesFromDB, resourceById, editResource, createResource, deleteResourceById };
