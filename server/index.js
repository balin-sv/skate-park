const express = require("express");
const jwt = require("jsonwebtoken");
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
    text: "select * from skaters where is_admin = false",
    values: [],
  };
  const result = await client.query(printAllUsers);
  res.send(result.rows);
  client.release(true);
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
      const token = jwt.sign({ user: result.id }, "my_token");
      res.status(200).send({ token, user: result.rows[0] });
    }
    client.release(true);
  } catch (err) {
    console.log("An error has occurred ", err);
  }
});

app.delete("/delete/:id", verifyToken, async (req, res) => {
  jwt.verify(req.token, "my_token", async (err, data) => {
    if (err) {
      res.sendStatus(403);
    } else {
      const { id } = req.params;
      try {
        const client = await pool.connect();
        const deleteUser = {
          text: "delete from skaters where id =$1",
          values: [id],
        };
        const result = await client.query(deleteUser);
        res.send(result.rows);
        client.release(true);
      } catch (err) {
        console.log("An error has occurred ", err);
      }
    }
  });
});

app.put("/user/:id/", verifyToken, async (req, res) => {
  jwt.verify(req.token, "my_token", async (err, data) => {
    if (err) {
      res.sendStatus(403);
    } else {
      const { nombre, password, anos_experiencia, especialidad } = req.body;
      const id = req.params.id;
      try {
        const client = await pool.connect();
        const updateUser = {
          text: `update skaters set nombre=$1,password=$2,anos_experiencia=$3,especialidad=$4 where id=${id}`,
          values: [nombre, password, anos_experiencia, especialidad],
        };
        const result = await client.query(updateUser);
        res.send(result.rows);
        client.release(true);
      } catch (err) {
        console.log("An error has occurred ", err);
      }
    }
  });
});

app.post("/new-user", async (req, res) => {
  const { email, nombre, password, anos_experiencia, especialidad } = req.body;
  console.log(email, nombre, password, anos_experiencia, especialidad);
  try {
    const checkMSG = await checkEmail(email);
    if (checkMSG === "ok") {
      const client = await pool.connect();
      const result = await client.query(
        "INSERT into skaters (email, nombre, password, anos_experiencia, especialidad, foto, estado,is_admin) VALUES($1, $2, $3, $4, $5, $6, $7,$8) RETURNING id",
        [
          email,
          nombre,
          password,
          anos_experiencia,
          especialidad,
          "test",
          false,
          false,
        ]
      );
      res.send(result.rows);
      client.release(true);
    } else {
      res.status(401).send([]);
    }
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  console.log("server start", port);
});

///______________utils

async function checkEmail(email) {
  return new Promise(async (resolve, reject) => {
    const client = await pool.connect();
    const checkEmail = {
      text: "select 1 from skaters where email = $1",
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

async function verifyToken(req, res, next) {
  const bearerToken = req.headers["authtoken"];
  if (typeof bearerHeader !== "indefined") {
    req.token = bearerToken;
    console.log("token exist!");
    next();
  } else {
    res.sendStatus(403);
  }
}
