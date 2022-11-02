import Express from "express";
import path from "path";

const app = Express();
const __dirname = path.resolve();

app.use(Express.static(path.join(__dirname, "site")));

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("yo");
});

app.get("/light", (req, res) => {
  res.sendFile(__dirname + "/site/index.html");
});
