import Express from "express";
import path from "path";

const app = Express();
const __dirname = path.resolve(path.dirname(""));

app.use(Express.static(__dirname + "/site"));

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

app.get("/light", (req, res) => {
  res.sendFile(__dirname + "/site/index.html");
});