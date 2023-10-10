var express = require("express");
var router = express.Router();

const ProjectsController = require("../../controller/master_controller/projectController");
const CategoriesController = require("../../controller/master_controller/CategoiesController")
const UploadImgController = require("../../controller/master_controller/UploadImgController");

// Projects
router.get("/projects", ProjectsController.getAllProjects);
router.get("/project-only", ProjectsController.getProjectsOnly);
router.get("/data-projects", ProjectsController.getAllData);
router.get("/data-projects/:projectId", ProjectsController.getAllDataByProjectId);
router.get("/project/:projectId", ProjectsController.getProjectByProjectId);
router.post("/project", ProjectsController.insertProject);
router.put("/update-project/:projectId", ProjectsController.updateProject);
router.put("/delete-project/:projectId", ProjectsController.softDelete);

// GET ALL CATEGORIES
router.get("/categories", CategoriesController.getAllCategories);
router.get("/category/:category_id", CategoriesController.getCategoryById);
router.post("/category", CategoriesController.insertCategory);
router.put("/category/:category_id", CategoriesController.updateCategory);
router.put("/delete-category/:category_id", CategoriesController.softDelete);

// Image
router.post("/image", UploadImgController.insertData );


module.exports = router;
