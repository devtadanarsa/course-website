// initalize express app and cors
const express = require("express");
const cors = require("cors");
// const multer = require("multer");
// const morgan = require("morgan");
const app = express();
const port = 8000;
app.use(cors());

//store image
// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage });

// app.use(express.urlencoded({ extended: true }));
// app.use(morgan("dev"));

// app.post("/upload", upload.single("profile_image"), (req, res) => {
//   // Access the uploaded file via req.file
//   if (!req.file) {
//     return res.status(400).json({ error: "No file uploaded." });
//   }

//   // Do something with req.file, e.g., upload to Cloudinary

//   res.status(200).json({ message: "File uploaded successfully." });
// });
// app.use(express.static(__dirname, "public"));

// specify the route
const userRoutes = require("./src/routes/users.routes");
const courseRoutes = require("./src/routes/course.routes");
const tutorRoutes = require("./src/routes/tutors.routes");

app.use(express.json());

// using the route
app.use("/users", userRoutes);
app.use("/lessons", courseRoutes);
app.use("/tutors", tutorRoutes);

// listen the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
