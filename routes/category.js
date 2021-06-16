import express from 'express';
import { model } from 'mongoose';
import { create, list, update, categoryById, read, remove } from '../controllers/category';
const router = express.Router();

router.post('/category', create);
router.get('/category', list);
router.get('/category/:categoryId', read);

router.put('/category/:categoryId', update);

router.delete('/category/:categoryId', remove);

router.param('categoryId', categoryById);

module.exports = router;