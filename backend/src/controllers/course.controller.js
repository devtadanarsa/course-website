const pool = require('../config/database');

const getCourses = (req, res) => {
    const queries = "SELECT * FROM course";
    pool.query(queries, (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    })
}

const getCourseById = (req, res) => {
    const id = parseInt(req.params.id);
    const queries = 
        `SELECT *,
        (
            SELECT jsonb_agg(jsonb_build_object('id', tech.tech_id, 'name', tech.tech_name))
            FROM tech
            WHERE course.course_id = tech.course_id
        ) AS tech
        FROM course WHERE course_id=${id} GROUP BY course_id`;
    pool.query(queries, (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    })
}

const getCourseChapters = (req, res) => {
    const id = parseInt(req.params.courseId);
    console.log(`ID NI BOS :${id}`);
    const queries = 
        `SELECT *,
        (
            SELECT jsonb_agg(jsonb_build_object('id', chapter_content.content_id, 'name', chapter_content.content_title, 'link', chapter_content.video_link))
            FROM chapter_content
            WHERE course_chapter.chapter_id = chapter_content.chapter_id
        ) AS content
        FROM course_chapter WHERE course_id=${id} GROUP BY chapter_id;
        `;
    pool.query(queries, (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    })
}

module.exports = {
    getCourses,
    getCourseById,
    getCourseChapters
}