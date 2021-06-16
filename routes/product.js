import express from 'express';
import { create, list, update, productById, read, remove } from '../controllers/product';
const router = express.Router();
// router.get('/product', test);
//Thêm sản phẩm
router.post('/product', create);

router.get('/product', list);
router.get('/product/:productId', read);

router.put('/product/:productId', update);

router.delete('/product/:productId', remove);

router.param('productId', productById);


module.exports = router;