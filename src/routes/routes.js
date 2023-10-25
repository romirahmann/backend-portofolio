var express = require('express');
var router = express.Router();
const path = require('path')


const masterRoutes = require('./master_routes/master.routes');
const auth_routes = require('./utility_routes/auth.routes');
const UploadImgController = require('./../controller/master_controller/UploadImgController')
const upload = require('./../../src/services/upload-img')

const { verifyToken, accessControl } = require('../services/auth.service');

// not found route
router.get('/not-found', function(req, res) {
    res.status(404).sendFile(path.join(__dirname, '../views/not-found.html'));
});

// authentication routes usage 
router.use('/auth/', auth_routes);


// master data routes usage 
router.use('/master/', verifyToken, accessControl, masterRoutes);
 
// Upload Image
router.get('/file/:filename', UploadImgController.getFile)
router.post('/upload', upload.single('file'), UploadImgController.uploadFile)
router.delete('/delete/:filename', UploadImgController.deleteFile)


//kecuali master, seharusnya routes dipisah per-table

module.exports = router;