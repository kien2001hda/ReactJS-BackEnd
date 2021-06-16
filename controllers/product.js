import Product from '../modoles/product';
import formidable from 'formidable';
import fs from 'fs';
import _ from 'lodash';

export const create = (req, res) => {
    console.log(req.body);
    const product = new Product(req.body);
    product.save((err, data) => {
        if (err) {
            res.status(400).json({
                error: "Add product failed"
            })
        }
        console.log(data);
        res.json(data)
    })
}
// export const create = (req, res) => {
//     let form = new formidable.IncomingForm();
//     form.keepExtensions = true;
//     form.parse(req, (err, fields, files) => {
//         console.log('---------------------')
//         console.log(fields);
//         if (err) {
//             return res.status(400).json({
//                 message: "Failed"
//             })
//         }
//         const { name, description, price, category } = fields;

//         if (!name || !description || !price || !category) {
//             return res.status(400).json({
//                 error: "Nhap du thong tin vao`"
//             })
//         }
//         let product = new Product(fields);
//         console.log(files)
//         if (files.photo) {
//             if (files.photo.size > 5000) {
//                 res.status(400).json({
//                     error: "nhap anh vo van qua"
//                 })
//             }
//             product.photo.data = fs.readFileSync(files.photo.path);
//             product.photo.contentType = files.photo.type;
//         }
//         // console.log(files)
//         product.save((err, data) => {
//             if (err) {
//                 return res.status(400).json({
//                     err: "Failed"
//                 })
//             }
//             res.send(data)
//         })
//     })

// }


export const productById = (req, res, next, id) => {
    Product.findById(id).exec((err, product) => {
        if (err || !product) {
            res.status(400).json({
                error: "Không tìm thấy sản phẩm"
            })
        }
        req.product = product;
        next();
    })
}
export const read = (req, res) => {
    return res.json(req.product);
}

export const remove = (req, res) => {
    let product = req.product;
    product.remove((err, deletedProduct) => {
        if (err) {
            return res.status(400).json({
                error: "Không xóa được sản phẩm"
            })
        }
        res.json({
            deletedProduct,
            message: "Sản phẩm đã được xóa thành công"
        })
    })
}

export const list = (req, res) => {
    // console.log('Product list');
    Product.find((err, data) => {
        if (err) {
            error: "Không tìm thấy sản phẩm"
        }
        res.json(data)
    })
    // res.json({
    //     message: "Successfully"
    // })
}

// export const update = (req, res) => {
//     let form = new formidable.IncomingForm();
//     form.keepExtensions = true;
//     form.parse(req, (err, fields, files) => {
//         if (err) {
//             return res.status(400).json({
//                 error: "update product failed"
//             })
//         }
//         const { name, description, price } = fields;
//         if (!name || !description || !price) {
//             return res.status(400).json({
//                 error: "Bạn cần nhập đầy đủ thông tin"
//             })
//         }
//         // let product = new Product(fields);
//         let product = req.product;
//         product = _.assignIn(product, fields);
//         //1kb=1000
//         //1mb=1000000
//         if (files.photo) {
//             if (files.photo.size > 100000) {
//                 res.status(400).json({
//                     error: "Bạn nên upload ảnh dưới 1mb"
//                 })
//             }
//             product.photo.data = fs.readFileSync(files.photo.type);
//             product.photo.contentType = files.photo.type;
//         }
//         product.save((err, data) => {
//             if (err) {
//                 res.status(400).json({
//                     error: "Không sửa được sản phẩm"
//                 })
//             }
//             res.json(data)
//         })
//         console.log(files);
//     });
// }
export const update = (req, res) => {
    const product = req.product;
    product.name = req.body.name;
    product.description = req.body.description;
    product.price = req.body.price;
    // product.photo = req.body.photo;
    product.quantity = req.body.quantity;
    product.status = req.body.status;
    product.category = req.body.category;
    product.save((err, data) => {
        if (err || !product) {
            res.status(400).json({
                error: "Khong sua duoc san pham"
            })
        }
        res.json(data);
    })
}