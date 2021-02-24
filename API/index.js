const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const multer = require("multer");
const upload = multer({ dest: "upload/" });

const app = express();

app.use(cors());
app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/upload", upload.single("photo"), (req, res) => {
  console.log(req.file);
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Server Running...");
});
