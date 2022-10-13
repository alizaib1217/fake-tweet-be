const express = require("express");
const connectDB = require("./config/db");
connectDB();

const app = express();
const PORT = process.env.PORT || 5001;

// middleware
app.use(express.json());

app.use("/api", require("./src/routes"));
app.use("/files", express.static(__dirname + "/src/files"));

app.listen(PORT, () => {
  console.log("Server Started.");
});
