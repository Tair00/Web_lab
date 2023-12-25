import { Router } from 'express';
import PostController from '../controllers/postController.js';

const router = Router();

router.post('/create', PostController.create);
router.put('/edit/:id', PostController.edit);
router.delete('/delete/:id', PostController.delete);
router.get('/get', PostController.get);

export default router;
