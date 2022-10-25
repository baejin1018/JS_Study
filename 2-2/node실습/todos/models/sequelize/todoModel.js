const { DataTypes, Model } = require("sequelize");
const sequelize = require("./index");

class Todo extends Model {}
Todo.init(
  {
    todoId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    job: {
      type: DataTypes.STRING,
    },
  },
  { sequelize, modelName: "Todo", tableName: "todo", timestamps: false }
);

module.exports = Todo;
