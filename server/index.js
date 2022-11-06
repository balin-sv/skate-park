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

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const client = await pool.connect();
    const checkUser = {
      text: "select * from skaters where email =$1 and password =$2",
      values: [email, password],
    };
    const result = await client.query(checkUser);
    if (result.rows.length == 0) {
      res.status(401).send("el usuario no autorizado");
    } else {
      res.status(200).send(result.rows);
    }
    client.release(true);
  } catch (err) {
    console.log("An error has occurred ", err);
  }
});
