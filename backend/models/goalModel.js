const { DataTypes } = require('sequelize');
const sequelize = require("../db/index.js");

const Goal = sequelize.define('Goal', {
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    text: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    freezeTableName: true,
    timestamps: false,
});

module.exports = Goal