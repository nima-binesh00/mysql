import { DataTypes } from "sequelize";
import { db_connect } from "../db/connection.js";
export const Post = db_connect.define("Post", {
  title: {
    type: DataTypes.STRING(),
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  content: {
    type: DataTypes.STRING(),
  },
});
