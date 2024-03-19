const express = require("express");
const cors = require("cors");
const app = express();
const corsOptions = require("./config/coreOptions.js");
app.use(cors(corsOptions));
const PORT = 9090;
// app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello Welcome to Fortress password manager API");
});

const router = require("./apis/routes.js");
app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} \nhttp://localhost:${PORT}`);
});
