'use strict';
const loader = require('./sequelize-loader');
const Sequelize = loader.Sequelize;

const User = loader.database.define('users',{
  userId:{
    type: Sequelize.INTEGER,
    primaryKey: true,
    allowNULL: false
  },
  username:{
    type: Sequelize.STRING,
    allowNull: false
  }
},{
    freezeTableName: true,
    timestamps: false
});

module.exports = User;
