const express = require("express");
const app = express();

const port = 80;

app.use(express.static(__dirname + "/public"));

app.listen(port, () => console.log("Server is running on http://localhost:%s/", port));
