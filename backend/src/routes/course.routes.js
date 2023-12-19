const { Router } = require('express');
const controller = require('../controllers/course.controller');

const router = Router();

router.get("/", controller.getCourses);
router.get("/:id", controller.getCourseById);
router.get("/:courseId/:chapterId", controller.getCourseChapters);
router.post("/", controller.addCourse);
router.put("/:id", controller.updateCourse);
router.delete("/:id", controller.removeCourse);

module.exports = router;