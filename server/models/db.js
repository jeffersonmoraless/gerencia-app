const { Sequelize } = require('sequelize')


const sequelize = new Sequelize(process.env.banco, process.env.user, process.env.password,{
    host: `${process.env.host}`,
    dialect:`${process.env.database}`,
    query:{raw:true}
    /*user: `${process.env.user}`,
    password: `${process.env.password}`,
    database: `${process.env.banco}`,*/
})
sequelize.authenticate().then(()=>{
    console.log('banco conectado com sucesso')
}).catch(()=>{
    console.log('não conseguiu conectar')
})

module.exports = sequelize;