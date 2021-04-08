var { Sequelize, Model, DataTypes} = require('sequelize')

var sequelize = new Sequelize('disneyDB', 'root', 'Cooper1!', {
    host:'localhost',
    port: 3306,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
})

module.exports = Sequelize;