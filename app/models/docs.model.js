module.exports = (sequelize, Sequelize) => {
  const docs = sequelize.define("docs", {
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

  return docs;
};
