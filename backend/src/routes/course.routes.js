const { Router } = require('express');
const controller = require('../controllers/course.controller');

const router = Router();

router.get("/", controller.getCourses);
router.get("/:id", controller.getCourseById);
router.get("/:courseId/:chapterId", controller.getCourseChapters);

module.exports = router;