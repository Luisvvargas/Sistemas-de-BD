const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const bookRoutes = require("./routes/bookRoutes");

const app = express();
const PORT = 3000;

mongoose.connect("mongodb://localhost/booklibrary", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(bodyParser.json());
app.use("/api/books", bookRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));  