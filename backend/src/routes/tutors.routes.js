const { Router } = require('express');
const controller = require('../controllers/tutors.controller');

const router = Router();

router.get("/", controller.getTutors);
router.get("/:id", controller.getTutorsById);
router.post("/", controller.addTutor);
router.put("/:id", controller.editTutor);
router.delete("/:id", controller.removeTutor);

module.exports = router;