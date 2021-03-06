module.exports = (sequelize, Sequelize) => {
  const applicant = sequelize.define("applicant", {
    address: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: "Address" 
    },
    state: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: "State" 
    },
    city: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: "City" 
    },
    country: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: "Country" 
    },
    zip_code: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: "Zip Code" 
    },
    phone_number: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: "Phone Number" 
    },
    website: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: "Website.com" 
    },
    about: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: "About Me or Summary" 
    },
    skill: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: "Skill" 
    },
    experience: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: "Experience" 
    },
    education: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: "Education" 
    },
    profile_img: {
      type: Sequelize.STRING,
    },
    banner_img: {
      type: Sequelize.STRING,
    },
    profile_vd: {
      type: Sequelize.STRING,
    },
    resume_pdf: {
      type: Sequelize.STRING,
    }
  });
  return applicant;
};
