const path = require("path");
const fs = require("fs");
const model = require("../../model/img.model");
const api = require("../../tools/common");

const uploadFile = async (req, res) => {
    if (!req.file) {
        return res.status(400).json({
            error: true,
            message: "No file uploaded",
        });
    }

    const newFileName = req.file.filename;
    return res.status(200).json({
        error: false,
        message: "File uploaded successfully",
        filename: newFileName,
    });

};

const getFile = async (req, res) => {
    const filename = req.params.filename;
    const filePath = path.join(__dirname, "../../../uploads/img", filename);
    res.sendFile(filePath);
};

const deleteFile = async (req, res) => {
    const filename = req.params.filename;
    const filePath = path.join(__dirname, "../../../uploads/img", filename);

    try {
        await fs.promises.access(filePath, fs.constants.F_OK);
        await fs.promises.unlink(filePath);
        res.status(200).json({ error: false, message: "File deleted successfully" });
    } catch (error) {
        res.status(404).json({ error: true, message: "File not found" });
    }
};

const insertData = async (req, res) => {
    const newData = req.body
    try{
        const data = await model.insert(newData)
        return api.ok(res, data);
    } catch {
        return api.error(res, "Internal Server Error", 500)
    }
}

module.exports = { uploadFile, getFile, deleteFile, insertData };
