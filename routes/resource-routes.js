import express from 'express';
import { getResources, completeResource, getAllResources, getResourceById, markResourceAsCompleted, addResource, deleteResource } from '../controllers/resource-controller.js';


const router = express.Router();
router.get('/', getAllResources);
// router.get('/', getResources);
router.get('/:id', getResourceById)

router.put('/:id', markResourceAsCompleted)
router.put('/:resourceId/complete', completeResource);

router.post('/', addResource);

router.delete('/:id', deleteResource);


export default router;
