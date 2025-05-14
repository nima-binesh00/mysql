import "dotenv/config";
import express from "express";
import { db_connect } from "./db/connection.js";
import "./model/user.model.js";
import "./model/Post .model.js";
import router from "./router/users.router.js";
const app = express();

const port = process.env.port;
app.use(express.json());
app.use(router);
db_connect
  .sync({ alter: true })
  .then(() => {
    console.log("connect to database");
  })
  .catch((ER) => {
    console.log("GOD" + ER);
  });
app.listen(port, () => {
  console.log("server is run 🐱‍🏍");
});
