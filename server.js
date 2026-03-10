const express = require("express");
const cors = require("cors");
app.use(cors());
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

let notes = [];

// get all notes
app.get("/api/notes", (req, res) => {
  res.json(notes);
});

// add note
app.post("/api/notes", (req, res) => {
  const note = {
    id: Date.now(),
    text: req.body.text
  };

  notes.push(note);
  res.json(note);
});

// delete note
app.delete("/api/notes/:id", (req, res) => {
  const id = Number(req.params.id);
  notes = notes.filter(n => n.id !== id);
  res.json({ success: true });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});