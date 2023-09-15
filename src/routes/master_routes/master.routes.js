var express = require("express");
var router = express.Router();

const ActorController = require("./../../controller/master_controller/ActorController");
const ProjectsController = require("../../controller/master_controller/projectController");

// actor data
router.get("/actor", ActorController.getAllActor);
router.get("/info", ActorController.getInfoActorFilm);
router.get("/actor/:id", ActorController.getActorById);
router.post("/actor", ActorController.insertActor);
router.put("/actor/:id", ActorController.updateActor);
router.delete("/actor/:id", ActorController.deleteActor);

// Projects
router.get("/projects", ProjectsController.getAllProjects);
router.get("/projects/:projectId", ProjectsController.getProjectByProjectId);
router.post("/project", ProjectsController.insertProject);
router.put("/update-project/:projectId", ProjectsController.updateProject);
router.put("/delete-project/:projectId", ProjectsController.softDelete);

module.exports = router;
