const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

app.use(cors());
app.use(express.json());

app.post("/dacourse", async (req, res) => {
  try {
    const { description } = req.body;
    const newCourse = await pool.query(
      "INSERT INTO course (description) VALUES ($1) RETURNING *",
      [description]
    );

    res.json(newCourse.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/dacourse", async (req, res) => {
  try {
    const allCourses = await pool.query(`SELECT * FROM course`);
    res.json(allCourses.rows);
  } catch (err) {
    console.error(err.message);
  }
});

app.get("/dacourse/:id", async (req, res) => {
  const { id } = req.params;
  const course = await pool.query("SELECT * FROM course WHERE id = $1", [id]);
  res.json(course.rows);
});
``;

app.put("/dacourse/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;

    const updateCourse = await pool.query(
      "UPDATE course SET description = $1 WHERE id = $2",
      [description, id]
    );

    res.json(updateCourse);
  } catch (err) {
    console.error(err.message);
  }
});

app.delete("/dacourse/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteCourse = await pool.query("DELETE FROM course WHERE id = $1", [
      id,
    ]);

    res.json("Deleted Successfully");
  } catch (err) {
    console.errpr(err.message);
  }
});

app.listen(5000, () => {
  console.log("server started");
});
