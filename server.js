const express = require("express");
const path = require("path");
const port = 3333

let initialPath = path.join(__dirname,"public");

let app = express();
app.use(express.static(initialPath)); //servidor estatico que vai retornar o que ta na pasta public

app.get("/", (req, res) => {
  res.sendFile(path.join(initialPath, "index.html"));
});

//start no servidor
app.listen(port, () => {
  console.log(`Server start up on port ${port}`);
})