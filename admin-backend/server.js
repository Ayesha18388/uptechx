const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const Hackathon = require("./models/Hackathon");

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/adminPanel", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Routes
app.get("/api/hackathons", async (req, res) => {
  const data = await Hackathon.find();
  res.json(data);
});

app.post("/api/hackathons", async (req, res) => {
  const newHack = new Hackathon(req.body);
  await newHack.save();
  res.json(newHack);
});

app.delete("/api/hackathons/:id", async (req, res) => {
  await Hackathon.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

app.listen(5000, () => console.log("Server running at http://localhost:5000"));
