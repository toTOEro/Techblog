// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');
// require bcrypt for password encrpytion
const bcrypt = require('bcrypt');

// Initialize User model (table) by extending off Sequelize's Model class
class User extends Model { }


// set up fields and rules for User model
User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8],
            }
        },
    },
    {
        hooks: {
            beforeCreate: async (newUserInfo) => {
                newUserInfo.password = await bcrypt.hash(newUserInfo.password, 15);
                return newUserInfo
            },
            beforeUpdate: async (updatedUserInfo) => {
                updatedUserInfo.password = await bcrypt.hash(updatedUserInfo.password, 15);
                return updatedUserInfo;
            },
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user',
    }

);

module.exports = User;