module.exports = (sequelize, Sequelize) => {
  const jobposting = sequelize.define("jobposting", {
    title: {
      type: Sequelize.STRING,
      allowNull: false
    },
    company: {
      type: Sequelize.STRING,
      allowNull: false
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false 
    },
    requirement: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    skill: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    is_active: {
      type: Sequelize.BOOLEAN,
    },
    bidang: {
      type: Sequelize.STRING,
    },
    company_logo: {
      type: Sequelize.STRING,
    },
    company_vd: {
      type: Sequelize.STRING,
    },
  });

  return jobposting;
};
