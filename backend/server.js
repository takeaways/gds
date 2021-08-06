const express = require("express");
const db = require("./db");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/api/values", (req, res) => {
  db.pool.query("SELECT * FROM lists;", (err, result, fields) => {
    if (err) {
      return res.status(500).send(err);
    }
    res.json(result);
  });
});

app.post("/api/value", (req, res) => {
  console.log("-----------ss--");
  console.log(req.body);
  db.pool.query(
    `INSERT INTO lists (value) VALUE ("${req.body.value}")`,
    (err, result, fields) => {
      if (err) {
        return res.status(500).send(err);
      }
      res.json({
        success: true,
        value: req.body.value,
      });
    }
  );
});

const port = 5000;
app.listen(port, () => {
  console.log("server start1 : " + port);
});
