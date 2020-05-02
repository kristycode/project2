/* eslint-disable semi */
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define("User", {
    userID: DataTypes.INTEGER,
    post_title: DataTypes.STRING,
    post_content: DataTypes.STRING,
    post_image: DataTypes.STRING
  }, {});
  Comment.associate = function (models) {
    // associations can be defined here
    Comment.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
    Comment.belongsTo(models.Post, {
      foreignKey2: {
        allowNull: false
      }
    });
  };
  return Comment;
}
