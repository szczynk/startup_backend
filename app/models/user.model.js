module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
    firstname: {
      type: Sequelize.STRING,
      allowNull: false
    },
    lastname: {
      type: Sequelize.STRING,
      allowNull: false
    },
    company: {
      type: Sequelize.STRING,
      allowNull: false
    },
    jobtitle: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    },
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
      defaultValue: "About Me" 
    },
    profile_img: {
      type: Sequelize.STRING,
    },
    video_profiles: {
      type: Sequelize.STRING,
      get() {
          return this.getDataValue('video_profiles').split(';')
      },
      set(val) {
         this.setDataValue('video_profiles',val.join(';'));
      },
    }
  });

  return User;
};
