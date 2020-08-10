module.exports = (sequelize, Sequelize) => {
  const application = sequelize.define("application", {
    resume: {
      type: Sequelize.STRING,
    },
    phone_number: {
      type: Sequelize.BIGINT(14),
    },
    cover_letter: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: "" 
    }
  });

  return application;
};
