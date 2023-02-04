const { Sequelize, DataTypes } = require('sequelize')
const db = require('./db')

const Categorias = db.define('categorias', {
    
    id_categoria: {
        type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true
    },
    categoria: {
        type: DataTypes.STRING(45), allowNull: false
    }
    
},{freezeTableName:true})
//Categorias.sync();



module.exports = Categorias;


/*
1	Despesas	
2	Dividas	
3	Cartão De Credito	
*/