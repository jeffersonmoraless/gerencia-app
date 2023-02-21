const { Sequelize, DataTypes } = require('sequelize');
const Clientes = require('./clientes')

const db = require('./db')

const Despesas = db.define('despesas', {
    
    id: {
        type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true
    },
    descricao: {
        type: DataTypes.STRING(60), allowNull: false
    },
    data: {
        type: DataTypes.DATE 
    },
    valor: {
        type: DataTypes.DECIMAL(10,2), allowNull: false
    }
    
},{freezeTableName:true})

Despesas.belongsTo(Clientes,{
    constraint: true,
    foreignKey: 'id_cliente'
})

//Despesas.sync();



module.exports = Despesas;