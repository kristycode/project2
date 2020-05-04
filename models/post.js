/* eslint-disable semi */
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define("User", {
    post_content: {
      type: DataTypes.STRING,
      allowNull: false
    },
    url_image: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  Post.associate = function (models) {
    // associations can be defined here
    Post.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Post;
}
