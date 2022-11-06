const express = require("express");
const app = express();
const { Pool } = require("pg");
var bodyParser = require("body-parser");

const cors = require("cors");

const port = 5000; //backend routing port

app.use(
  cors({
    origin: "*",
  })
);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());

const config = {
  user: "postgres",
  host: "localhost",
  database: "skatepark",
  password: "12345",
  max: 20,
  idleTimeoutMillis: 5000,
  connectionTimeoutMillis: 2000,
  port: 5432,
  ssl: { rejectUnauthorized: false },
  sslmode: require,
};
const pool = new Pool(config);

app.get("/users", async (req, res) => {
  const client = await pool.connect();
  const printAllUsers = {
    text: "select * from skaters",
    values: [],
  };
  const result = await client.query(printAllUsers);
  console.log(result);
  res.send(result.rows);
  client.release(true);
});

app.listen(port, () => {
  console.log("server start", port);
});
