const { sequelize } = require('../models');
const { QueryTypes } = require('sequelize');

/**
 * Menampilkan user profile berdasarkan id
 */
exports.getUserProfile = async (req, res) => {
  const { id } = req.params;

  const user = await sequelize.query(
    'SELECT u.firstname, u.lastname, u.email, a.* FROM users u INNER JOIN applicants a ON u.id = a.userId WHERE a.id = $id',
    {
      bind: { id: id },
      type: QueryTypes.SELECT,
    }
  );

  return res.status(200).send(...user);
};

exports.allAccess = (req, res) => {
  res.status(200).send('Public Content.');
};

exports.userBoard = (req, res) => {
  res.status(200).send('User Content.');
};

exports.adminBoard = (req, res) => {
  res.status(200).send('Admin Content.');
};

exports.moderatorBoard = (req, res) => {
  res.status(200).send('Moderator Content.');
};
