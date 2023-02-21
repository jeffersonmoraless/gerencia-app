const { Sequelize, DataTypes } = require('sequelize');
const Clientes = require('./clientes')

const db = require('./db')

const Cartoes = db.define('cartoes', {
    
    id: {
        type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true
    },
    descricao: {
        type: DataTypes.STRING(60), allowNull: false
    },
    valor: {
        type: DataTypes.DECIMAL(10,2), allowNull: false
    },
    data: {
        type: DataTypes.DATE 
    },
    qtd_parcelas: {
        type: DataTypes.INTEGER
    },
    
    
},{freezeTableName:true})

Cartoes.belongsTo(Clientes,{
    constraint: true,
    foreignKey: 'id_cliente'
})

//Cartoes.sync();



module.exports = Cartoes;