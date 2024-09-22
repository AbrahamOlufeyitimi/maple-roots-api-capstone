import { getResourcesBySchool, markResourceCompleted, getAllResourcesFromDB, resourceById, editResource, createResource, deleteResourceById } from '../models/resource.js';

const addResource = async (req, res) => {
  const { resource, link, school } = req.body;


  const newResource = { resource, link, school };
  try {
    const resourceId = await  createResource(newResource);

    res.status(201).json(resourceId);
  } catch (error) {
    res.status(500).json( { message: 'Error creating resource', error: error.message});
  }
};

const getResources = async (req, res) => {
  const { school } = req.body;

  if (!['SMU', 'Dalhousie University'].includes(school)) {
    return res.status(400).json({ message: 'Invalid school' });
  }

  try {
    const resources = await getResourcesBySchool(school);
    res.status(200).json(resources);

  } catch (error) {
    console.error('Error fetching resources:', error);
    res.status(500).json({ message: 'Error fetching resources', error: error.message });
  }
};

const getResourceById = async (req, res) => {
  const { id } = req.params;

  try {
    const resource = await resourceById(id);
    if (!resource) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(resource);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching resource by id', error: error.message });
  }
}

const markResourceAsCompleted = async (req, res) => {
  const { id } = req.params;
  const updatedResource = req.body;

  try {
    const edit = await editResource(id, updatedResource);
    res.status(200).json(edit);
  } catch (error) {
    res.status(500).json({ message: 'Error updating resource', error: error.message });
  }
}

const completeResource = async (req, res) => {
  const { resourceId } = req.params;

  try {
    await markResourceCompleted(resourceId);
    res.status(200).json({ message: 'Resource marked as completed' });
  } catch (error) {
    res.status(500).json({ message: 'Error updating resource' });
  }
};

const getAllResources = async (req, res) => {
  const { school } = req.query;

  if (!school) {
    return res.status(400).json({message: 'School is required to fetch resources' });
  }

  try {
    const resources = await getAllResourcesFromDB(school);

    if (resources.length === 0) {
      return res.status(404).json({ message: 'No resources found for this school' });
    }
    res.status(200).json(resources);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching resources' });
  }
};


const deleteResource = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await deleteResourceById(id);

    if (result) {
      res.status(200).json({ message: `Resource with ID ${id} deleted successfully` });
    } else {
      res.status(404).json({ message: `Resource with ID ${id} not found` });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error deleting resource', error: error.message });
  }
};

export { addResource, getResources, completeResource, getAllResources, getResourceById, markResourceAsCompleted, deleteResource };
