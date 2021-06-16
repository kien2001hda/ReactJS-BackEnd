import Category from '../modoles/category';

export const create = (req, res) => {
    const category = new Category(req.body);
    category.save((err, data) => {
        if (err) {
            return res.status(400).json({
                error: "Khoong them duoc danh muc"
            })
        }
        res.json({ data })
    })
}

export const categoryById = (req, res, next, id) => {
    Category.findById(id).exec((err, category) => {
        if (err || !category) {
            res.status(400).json({
                error: "Không tìm thấy Danh muc"
            })
        }
        req.category = category;
        next();
    })
}
export const read = (req, res) => {
    return res.json(req.category);
}

export const remove = (req, res) => {
    let category = req.category;
    category.remove((err, deletedcategory) => {
        if (err) {
            return res.status(400).json({
                error: "Không xóa được Danh muc"
            })
        }
        res.json({
            deletedcategory,
            message: "Danh muc đã được xóa thành công"
        })
    })
}

export const list = (req, res) => {
    // console.log('category list');
    Category.find((err, data) => {
            if (err) {
                error: "Không tìm thấy Danh muc"
            }
            res.json(data)
        })
        // res.json({
        //     message: "Successfully"
        // })
}

export const update = (req, res) => {
    const category = req.category;
    category.name = req.body.name;
    category.photo = req.body.photo;
    category.description = req.body.description;
    category.save((err, data) => {
        if (err) {
            return res.status(400).json({
                error: "Khoong sua duoc danh muc"
            })
        }
        res.json(data)
    })
}