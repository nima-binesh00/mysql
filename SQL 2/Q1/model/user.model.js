import { DataTypes } from "sequelize";
import { db_connect } from "../db/connection.js";
import { Post } from "./Post .model.js";
export const user = db_connect.define(
  "user",
  {
    name: {
      type: DataTypes.STRING(),
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    email: {
      type: DataTypes.STRING(),
      validate: {
        isEmail: true,
      },
    },
  },
  {
    timestamps: false,
  }
);
user.hasMany(Post);
Post.belongsTo(user);
