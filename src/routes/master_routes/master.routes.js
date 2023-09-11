var express = require('express');
var router = express.Router();

const ActorController = require('./../../controller/master_controller/ActorController');



// actor data
router.get('/actor', ActorController.getAllActor)
router.get('/info', ActorController.getInfoActorFilm)
router.get('/actor/:id', ActorController.getActorById)
router.post('/actor', ActorController.insertActor)
router.put('/actor/:id', ActorController.updateActor)
router.delete('/actor/:id', ActorController.deleteActor)



module.exports = router;