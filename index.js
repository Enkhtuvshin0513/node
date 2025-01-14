import express from "express";
import fs from "fs";

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  //html info page
  const html = fs.readFileSync("./index.html");

  res.setHeader("Content-type", "text/html");
  res.send(html);
});

app.get("/movies", (req, res) => {
  const movies = JSON.parse(fs.readFileSync("./movies.json"));

  const { movieTitile } = req.query;

  res.send({ success: true, data: movies });
});

app.post("/movies", (req, res) => {
  const movie = req.body;

  const movies = JSON.parse(fs.readFileSync("./movies.json"));

  movies.push(movie);

  fs.writeFileSync("./movies.json", movies);

  res.send({ success: true, message: "movie added" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
