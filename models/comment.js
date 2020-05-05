/* eslint-disable semi */
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define("Comment", {
    commentary: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  Comment.associate = function (models) {
    // associations can be defined here
    Comment.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
    Comment.belongsTo(models.Post, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Comment;
}
