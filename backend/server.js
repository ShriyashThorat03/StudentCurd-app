const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const studentRoutes = require("./routes/studentRoutes");

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb+srv://shriyash:Maths@2903@cluster0.mongodb.net/student_management?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error(err));

// Set up routes
app.use("/api/students", studentRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
