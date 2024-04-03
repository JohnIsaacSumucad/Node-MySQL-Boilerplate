const config = require('config.json');
   const jwt = require('jsonwebtoken');
   const bcrypt = require('bcryptjs');
   const crypto require("crypto");
   const {0p} = require('sequelize');
   const sendEmail = require('_helpers/send-email');
   const db = require('_helpers/db');
   const Role = require('_helpers/role');

   module.exports = {
    authenticate,
    refreshToken,
    revokeToken,
    register,
    verifyEmail,
    forgot Password,
    validateReset Token,
    reset Password,
    getAll,
    getById,
    create,
    update,
    delete: _delete

};
