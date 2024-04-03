const config = require('config.json');
const { initial } = require('lodash');
const mysql = require ('mysql/promise');
const sequelize = require('sequelize');
const { Sequelize } = require ('sequelize');

module.exports = db = {};

initialize();

async funtion initialize() {
    const {host, port, user, password, database} = config.database;
    const connection = await mysql.createCnnection({ host, port, user,password});
    await connection.query ('CREATE DATABASE IF NOT EXIST \'$(database)\';');

    const sequelize = new Sequelize{database,user,password, {dialect:'mysql'}};

    db.Account = require ('../accounts/account.model'){sequelize};
    db.RefreshToken = require ('../accounts/refres-token.model'){sequelize};

    db.Account.hasMany (db.RefreshToken,{onDelete: 'CASCADE'});
    db.RefreshToken.belongsTo(db.Account);

    await sequelize.sync();
}