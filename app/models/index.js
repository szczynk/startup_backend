const config = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    operatorsAliases: false,

    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/user.model.js")(sequelize, Sequelize);
db.applicant = require("../models/applicant.model.js")(sequelize, Sequelize);
db.recruiter = require("../models/recruiter.model.js")(sequelize, Sequelize);

db.jobposting = require("../models/jobposting.model.js")(sequelize, Sequelize);
db.application = require("../models/application.model.js")(sequelize, Sequelize);

db.role = require("../models/role.model.js")(sequelize, Sequelize);
db.images = require("../models/image.model.js")(sequelize, Sequelize);
db.docs = require("../models/docs.model.js")(sequelize, Sequelize);
db.video = require("../models/video.model.js")(sequelize, Sequelize);


db.role.belongsToMany(db.user, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId",
  as: "roles"
});

db.user.belongsToMany(db.role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId",
  as: "roles"
});

// saved_job 
db.jobposting.belongsToMany(db.applicant, {
  through: "saved_job",
  foreignKey: "jobId",
  as: "applicant"
});

db.applicant.belongsToMany(db.jobposting, {
  through: "saved_job",
  foreignKey: "applicantId",
  as: "jobposting"
});

//recruiter-jobposting
db.recruiter.hasMany(db.jobposting, {
  as: "jobposting"
});

db.jobposting.belongsTo(db.recruiter, {
  foreignKey: "recruiterId",
  as: "recruiter"
});

//applicant-application-jobposting
db.applicant.belongsToMany(db.jobposting, {
  through: "application",
  foreignKey: "applicantId",
  otherKey: "jobId",
  as: "applicants"
});

db.jobposting.belongsToMany(db.applicant, {
  through: "application",
  foreignKey: "jobId",
  otherKey: "applicantId",
  as: "applicants"
});

// user profile recruiter & applicant
db.applicant.belongsTo(db.user, {
  foreignKey: "userId",
  as: "user"
});

db.recruiter.belongsTo(db.user, {
  foreignKey: "userId",
  as: "user"
});


db.ROLES = ["admin", "moderator", "hunter", "user"];

module.exports = db;
