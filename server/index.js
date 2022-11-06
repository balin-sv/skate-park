const express = require("express");
const app = express();
const { Pool } = require("pg");
var bodyParser = require("body-parser");

path = require("path");
const cors = require("cors");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
app.use(express.static("public"));

const config = {
  user: "xxxxxxxxx",
  host: "localhost",
  database: "softlife",
  password: "xxxxxxxx",
  max: 20,
  idleTimeoutMillis: 5000,
  connectionTimeoutMillis: 2000,
  port: 5432,
  ssl: { rejectUnauthorized: false },
  sslmode: require,
};
const pool = new Pool(config);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

app.get("/usuarios", async (req, res) => {
  const client = await pool.connect();
  const printAllUsers = {
    text: "select * from usuarios",
    values: [],
  };
  const result = await client.query(printAllUsers);
  console.log(result);
  res.send(result.rows);
  client.release(true);
});

app.post("/usuario", async (req, result) => {
  const { email, password } = req.body;
  try {
    const checkMSG = await checkEmail(email);
    if (checkMSG === "ok") {
      const client = await pool.connect();
      const addUser = {
        text: "insert into usuarios (email, password) values ($1, $2)",
        values: [email, password],
      };
      const res = await client.query(addUser);
      if (res.rowCount == 1) {
        console.log("Data successfully saved to disk");
        result.sendStatus(200);
      } else {
        result.sendStatus(400);
      }
      client.release(true);
    } else {
      result.status(401).send([]);
    }
  } catch (error) {
    console.log(error);
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const client = await pool.connect();
    const checkUser = {
      text: "select email,password from usuarios where email = $1 and password = $2",
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

app.listen(3001, () => {
  console.log("en puerto 3001");
});

///______________utils

async function checkEmail(email) {
  return new Promise(async (resolve, reject) => {
    const client = await pool.connect();
    const checkEmail = {
      text: "select 1 from usuarios where email = $1",
      values: [email],
    };
    client
      .query(checkEmail)
      .then((res) => {
        if (res.rowCount > 0) {
          resolve("email ya existe");
        } else {
          resolve("ok");
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        client.release();
      });
  });
}
