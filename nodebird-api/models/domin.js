const Sequlize = require("sequelize");

class Domain extends Sequlize.Model {
  static initiate(sequelize) {
    Domain.init(
      {
        host: {
          type: Sequlize.STRING(80),
          allowNull: false,
        },
        type: {
          type: Sequlize.ENUM("free", "premium"),
          allowNull: false,
        },
        clientSecret: {
          type: Sequlize.UUID,
          allowNull: false,
        },
      },
      {
        sequelize,
        timestamps: true,
        paranoid: true,
        modelName: "Domain",
        tableName: "domain",
      }
    );
  }
  static associations(db) {
    db.Domain.belongsTo(db.User);
  }
}

module.exports = Domain;
