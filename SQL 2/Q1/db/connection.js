import { DataTypes, Sequelize } from "sequelize";
// import "dotenv/config";

const {
  MYSQL_host,
  MYSQL_port,
  MYSQL_username,
  MYSQL_password,
  MYSQL_database,
} = process.env;
export const db_connect = new Sequelize({
  dialect: "mysql",
  host: MYSQL_host,
  port: MYSQL_port,
  username: MYSQL_username,
  password: MYSQL_password,
  database: MYSQL_database,
  logging: true,
});
