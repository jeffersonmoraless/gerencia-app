const { Sequelize, DataTypes } = require('sequelize')
const db = require('./db')

const Formato_pgt = db.define('formato_pgt', {
    
    id: {
        type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true
    },
    name: {
        type: DataTypes.STRING(20), allowNull: false
    }
    
},{freezeTableName:true})

//Formato_pgt.sync();



module.exports = Formato_pgt;

