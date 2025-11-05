const pool = require("../config/database");

function createTutorController(customPool = pool) {
  const getTutors = (req, res) => {
    const query = "SELECT * FROM tutors";
    customPool.query(query, (error, results) => {
      if (error) return res.status(500).json({ error: error.message });
      res.status(200).json(results.rows);
    });
  };

  const getTutorsById = (req, res) => {
    const id = parseInt(req.params.id);
    const query = `SELECT * FROM tutors WHERE tutor_id=$1`;
    customPool.query(query, [id], (error, results) => {
      if (error) return res.status(500).json({ error: error.message });
      res.status(200).json(results.rows);
    });
  };

  const addTutor = (req, res) => {
    const { name, degree, language, desc, video } = req.body;
    const query = `
      INSERT INTO tutors (tutor_name, speciality, native_language, tutor_desc, intro_video_link)
      VALUES ($1, $2, $3, $4, $5)
      RETURNING *;
    `;
    customPool.query(
      query,
      [name, degree, language, desc, video],
      (error, results) => {
        if (error) return res.status(500).json({ error: error.message });
        res.status(201).json(results.rows[0]);
      }
    );
  };

  const editTutor = (req, res) => {
    const { id } = req.params;
    const { name, degree, language, desc, video } = req.body;
    const query = `
      UPDATE tutors
      SET tutor_name=$2, speciality=$3, native_language=$4, tutor_desc=$5, intro_video_link=$6
      WHERE tutor_id=$1 RETURNING *;
    `;
    customPool.query(
      query,
      [id, name, degree, language, desc, video],
      (error, results) => {
        if (error) return res.status(500).json({ error: error.message });
        res.status(200).json(results.rows[0]);
      }
    );
  };

  const removeTutor = (req, res) => {
    const { id } = req.params;
    const query = `DELETE FROM tutors WHERE tutor_id=$1`;
    customPool.query(query, [id], (error, results) => {
      if (error) return res.status(500).json({ error: error.message });
      res.status(200).send("Removed!");
    });
  };

  return { getTutors, getTutorsById, addTutor, editTutor, removeTutor };
}

const defaultController = createTutorController();

module.exports = {
  ...defaultController,
  createTutorController,
};
