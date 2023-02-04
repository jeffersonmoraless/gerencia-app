const { Sequelize, DataTypes } = require('sequelize')
const db = require('./db')

const Clientes = db.define('clientes', {
    
    id: {
        type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true
    },
    cliente: {
        type: DataTypes.STRING(70), allowNull: false
    },
    email: {
        type: DataTypes.STRING(80), allowNull: false, unique: true
    },
    senha: {
        type: DataTypes.STRING(255), allowNull: false
    }
    
},{freezeTableName:true})

//Clientes.sync();



module.exports = Clientes;

