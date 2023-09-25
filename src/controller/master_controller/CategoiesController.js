const model = require("../../model/categories.model");
const api = require("../../tools/common");

const getAllCategories = async (req, res) => {
    try {
        const data = await model.getAll();
        return api.ok(res, data)
    } catch {
        return api.error(res, "Couldn't get all categories", 500);
    }
}

const getCategoryById = async (req, res) => {
    const category_id = req.params.category_id;
    try {
        const data = await model.getById(category_id);
        return api.ok(res, data)
    } catch {
        return api.error(res, "Couldn't get category", 500);
    }
} 

const insertCategory = async (req, res) => {
    const newData = req.body
    try{
        const data = await model.insert(newData);
        return api.ok(res, data)
    } catch {
        return api.error(res, "Failed to insert data category", 500)
    }
}

const updateCategory = async (req, res) => {
    const category_id = req.params.category_id
    const newData = req.body

    try{
        const data = await model.update(category_id, newData);
        return api.ok(res, data)
    } catch {
        return api.error(res, "Failed to update data", 500)
    }
}

const softDelete = async (req, res) => {
    const category_id = req.params.category_id
    try{
        const data = await model.softDelete(category_id);
        return api.ok(res, data);
    } catch {
        return api.error(res, "Failed to delete data", 500)
    }
}

module.exports = {
    getAllCategories,
    getCategoryById,
    insertCategory,
    updateCategory,
    softDelete
}