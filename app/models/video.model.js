module.exports = (sequelize, Sequelize) => {
  const videos = sequelize.define("videos", {
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

  return videos;
};
