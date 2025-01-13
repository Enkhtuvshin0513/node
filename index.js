// movies.json file uusgene
// json file iin medeellig chataar ywuuln

import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  //html info page
  res.send("info");
});

app.get("/movies", (req, res) => {
  // odoo garch bui kinonuuniig butsaan array baidlaar butsaan [{}]
  res.send("news");
});

app.get("/movies", (req, res) => {
  // odoo garch bui kinonuunuud deer kino nemn
  // {} ==> array.push({})
  res.send("news");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
