'use strict';
const Sequelize = require('sequelize');
const sequelize = new Sequelize(
  'postgres://postgres:postgres@localhost/schedule_once_again',
  { logging: true });

module.exports = {
  database: sequelize,
  Sequelize: Sequelize
};