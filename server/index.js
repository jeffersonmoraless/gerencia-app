require('dotenv').config()
const jwt = require('jsonwebtoken')
const express = require('express');
const app = express();
const mysql = require('mysql2');
const cors = require('cors');

const bcrypt = require('bcrypt')

/*Importação do models*/

const Clientes = require('./models/clientes')
const Formato_pgt = require('./models/formato_pgt')
const Categorias = require('./models/categorias');
const Dividas = require('./models/Dividas');
const Despesas = require('./models/Despesas');
const Cartoes = require('./models/Cartoes');


app.use(express.json());
app.use(cors());



/*
const sign = (payload) =>{
    jwt.sign(payload, process.env.secret, {expiresIn:3600})
}*/

const verify = (req,res,next) =>{
    
    try {
        const token_verify = jwt.verify(req.headers.authorization, process.env.secret)
        req.userId = token_verify.userId
        //console.log(token_verify)
        return next()
    } catch (error) {
        console.log(error)
    }

}

app.get('/formato_pgt', async (req, res) => {

    res.status(200).send(await Formato_pgt.findAll({
        attributes: ['id', 'name']
    }))

})

app.get('/categoria', async (req, res) => {

    res.status(200).send(await Categorias.findAll({
        attributes: ['id_categoria', 'categoria']
    }))

})





app.get('/teste/testes',(req,res)=>{
  Despesas.findOne({ where: { email: req.body.email } })
})



app.post('/user/login', async (req, res) => {
/*    
console.log('email: ', req.body.email)
        console.log('senha: ', req.body.senha)
*/
    if (!req.body.email) {

        console.log('Insira email do  para continuar')
        return res.status(422).send('O campo email e de prenchimento obrigatorio, Insira email para continuar')

    }
   if (!req.body.senha) {

        console.log('Insira senha para continuar')
        return res.status(422).send('O campo Senha é de prenchimento obrigatorio, Insira a senha para continuar')

    } 
    const user = await Clientes.findOne({ where: { email: req.body.email } })
    //console.log('email: ', user.email)
    if( user === null){
        console.log('Usuario informado não possui cadastrado, realize cadastro para continuar')
        return res.status(422).send('Usuario informado não possui cadastrado, realize cadastro para continuar')
    }
    try {
        if(await bcrypt.compare(req.body.senha, user.senha)){
            
            const token  = jwt.sign({userId : user.id},process.env.secret, {expiresIn:300})
           
            res.status(200).send({msg:'Usuario logado com sucesso', auth:true, user:user.cliente,token:token})
        
        }else{
            res.status(401).send('senha invalida')
        }
    } catch (error) {
        
    }

    
})





/*let sql = 'select * from tipo'

db.query(sql, (err, result) => {
    if (err) {
        console.log(err);
    } else {
        res.send(result);
    }
})



app.get('/dividas', async (req, res) => {

const result = await Dividas.findAll({
    attributes: ['descricao', 'valor', 'data']
})
})
/*  
let sql = "select descricao , valor, date_format(data,'%d/%m/%Y') data from dividas"

db.query(sql, (err, result) => {
  if (err) {
      console.log(err);
  } else {
      res.send(result);
  }
})
app.get('/dividas/total', (req, res) => {
let sql = "select sum(valor) valor from dividas"

db.query(sql, (err, result) => {
  if (err) {
      console.log(err);
  } else {
      res.send(result);
  }
})
});
*/
app.post('/cadastrar/despesas', verify, async(req, res) => {
    //console.log('token aprovado',req.userId)
    

try {
    
    await Despesas.create({
        descricao: req.body.descricao,
        data: req.body.data,
        valor: req.body.valor,
        id_cliente: req.userId 
    })
    
} catch (error) {
    console.log(error)
}






//console.log('divida: 'descricao,' valor: ',valor,' data: ',data, 'cliente',id_cliente)
/*
    let sql = "insert into despesas values (?,?,?,?)"

    db.query(sql, [null, descricao, data, valor], (err, result) => {
        if (err) console.log(err);
    })*/
});
/*
app.post('/cadastrar/dividas', (req, res) => {

    const { descricao, valor, data, data_vencimento, categoria, qtd_parcelas } = req.body

    if (qtd_parcelas === '') {
        qtd_parcelas = null;
    }

    let sql = "insert into dividas values (?,?,?,?,?,?,?)"

    db.query(sql, [null, descricao, valor, data, data_vencimento, categoria, qtd_parcelas], (err, result) => {
        if (err) console.log(err);
    })
})
async function listEmail(){
    

   
}

//rota para realizar cadastro na tabela de clientes

app.post('/CadastroClientes', async (req, res) => {

    let salt, passwordHash, size, position

    size = req.body.email.length
    position = req.body.email.indexOf('@')

    console.log(size)


    if (!req.body.cliente) {
        console.log('nome obrigatorio')
        return res.status(422).send('O campo nome é de prenchimento obrigatorio')

    } if (!req.body.email) {

        console.log('email obrigatorio')
        return res.status(422).send('O campo email é de prenchimento obrigatorio')

    } else if (position === -1) {

        return res.status(422).send('Insira um endereço de email válido')

    } else if (position < 1 || (size - position) < 2) {

        return res.status(422).send('Insira um endereço de email válido')

    } else if (await Clientes.findOne({ where: { email: req.body.email } })) {

        console.log('email existente')
        return res.status(422).send('email já possui cadastro')

    }
    if (!req.body.senha) {

        console.log('senha obrigatorio')
        return res.status(422).send('O campo Senha é de prenchimento obrigatorio')

    } else if (!req.body.senhaConfirma) {

        console.log('confimação senha obrigatorio')
        return res.status(422).send('O campo Confirme a Senha é de prenchimento obrigatorio')

    } else if (req.body.senha === req.body.senhaConfirma) {

        salt = await bcrypt.genSalt(12)
        passwordHash = await bcrypt.hash(req.body.senha, salt)

    } else {

        console.log('senha diferentes')
        return res.status(422).send('O campo senha e confirmação de senha são diferentes')

    }
    try {

        await Clientes.create({
            cliente: req.body.cliente,
            email: req.body.email,
            senha: passwordHash
        })

        res.status(201).send({msg:'Parabéns, usuario cadastrado com sucesso.'})

    } catch (error) {
        console.log(error)
        res.status(500).send('Aconteceu um erro no servidor, tente novamente mais tarde!')
    }

})

*/
app.listen(3500, (res, req) => {
    console.log("rodando porta 3500");
});




/*setTimeout(() => {
console.log('chegou no final')
}, 2000)

app.post('/autentic/cadastro/cad', async (req, res) => {
    await Categorias.create(req.body)
})
*/