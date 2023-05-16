const express = require("express");
require("dotenv").config();
const cors = require("cors");

const courceRoute = require("./routes/courceRoute");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/cource", courceRoute);

app.listen(process.env.PORT);
