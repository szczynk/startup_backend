module.exports = (sequelize, Sequelize) => {
  const Images = sequelize.define("images", {
    type: {
      type: Sequelize.STRING,
    },
    name: {
      type: Sequelize.STRING,
    },
    data: {
      type: Sequelize.BLOB("long"),
    },
  });

  return Images;
};
