const pool = require("../config/database");
// const cloudinary = require("cloudinary").v2;

// cloudinary.config({
//   cloud_name: "duvpssn0q",
//   // api_key: process.env.CLOUDINARY_API_KEY,
//   api_key: "133161998373798",
//   api_secret: "v8Eqctl-Mob6PsJH6ei1uO9kI3w",
//   // api_secret: process.env.CLOUDINARY_API_SECRET,
//   secure: true,
// });

const getTutors = (req, res) => {
  const queries = "SELECT * FROM tutors";
  pool.query(queries, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const getTutorsById = (req, res) => {
  const id = parseInt(req.params.id);
  const queries = `SELECT * FROM tutors WHERE tutor_id=${id} GROUP BY tutor_id`;
  pool.query(queries, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const addTutor = (req, res) => {
  const { name, degree, language, desc, video } = req.body;
  // const { profile_image } = req.file;

  // const cloud = cloudinary.uploader.upload(profile_image);

  // const imageResult = cloud.secure_url;

  // const imageURL = cloudinaryResult.secure_url;

  const queries = `INSERT INTO tutors(tutor_name, speciality, native_language, tutor_desc, intro_video_link) values($1, $2, $3, $4, $5)`;
  pool.query(
    queries,
    [name, degree, language, desc, video],
    (error, results) => {
      if (error) throw error;
      res.status(201).send(results);
    }
  );
};

const editTutor = (req, res) => {
  const { id } = req.params;
  const { name, degree, language, desc, video } = req.body;
  const queries = `UPDATE tutors SET tutor_name=$2, speciality=$3, native_language=$4, tutor_desc=$5, intro_video_link=$6 WHERE tutor_id=$1`;
  pool.query(
    queries,
    [id, name, degree, language, desc, video],
    (error, results) => {
      if (error) throw error;
      res.status(201).send("Updated!");
    }
  );
};

const removeTutor = (req, res) => {
  const { id } = req.params;
  const queries = `DELETE FROM tutors WHERE tutor_id=${id}`;
  pool.query(queries, (error, results) => {
    if (error) throw error;
    res.status(201).send("Removed!");
  });
};

module.exports = {
  getTutors,
  getTutorsById,
  addTutor,
  editTutor,
  removeTutor,
};
