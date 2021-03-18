import express from 'express';

const router = express.Router();

router.get('/', (req, res, next) => {
    res.json({
        mess: "Home"
    })
    console.log('thanh cong', port)
});

router.get('/products', (req, res, next) => {
    res.json({
        mess: "list products"
    })
    console.log('thanh cong', port)
});


module.exports = router;