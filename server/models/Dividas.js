const { Sequelize, DataTypes } = require('sequelize');
const Clientes = require('./clientes')

const db = require('./db')

const Dividas = db.define('dividas', {
    
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
    data_vencimento: {
        type: DataTypes.DATE
    },
    qtd_parcelas: {
        type: DataTypes.INTEGER
    },
    
    
},{freezeTableName:true})

Dividas.belongsTo(Clientes,{
    constraint: true,
    foreignKey: 'id_cliente'
})

//Dividas.sync();



module.exports = Dividas;

/*CREATE TABLE `dividas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `descricao` varchar(35) NOT NULL,
  `valor` decimal(10,2) DEFAULT NULL,
  `data` date DEFAULT NULL,
  `data_vencimento` date DEFAULT NULL,
  `categoria` int(11) DEFAULT NULL,
  `qtd_parcelas` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `categoria` (`categoria`)
) ENGINE=MyISAM AUTO_INCREMENT=21 DEFAULT CHARSET=latin1
*/