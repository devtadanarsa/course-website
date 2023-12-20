const { Router } = require('express');
const controller = require('../controllers/course.controller');

const router = Router();

router.get("/", controller.getCourses);
router.get("/:id", controller.getCourseById);
router.get("/:courseId/:chapterId", controller.getCourseChapters);
router.post("/", controller.addCourse);
router.post("/:id", controller.addCourseChapter);
router.post("/:courseId/content/:chapterId", controller.addChapterContent);
router.put("/:id", controller.updateCourse);
router.put("/:courseId/:chapterId", controller.updateChapter);
router.delete("/:id", controller.removeCourse);
router.delete("/:courseId/chapter/:chapterId", controller.removeChapter);
router.delete("/:chapterId/content/:contentId", controller.removeContent)

module.exports = router;