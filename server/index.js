const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');


const db = mysql.createPool({
    host: 'localhost',
    user: 'j_morales',
    password: 'ana170607',
    database: 'gerencia',
});

app.use(express.json());
app.use(cors());

app.get('/categoria', (req, res) => {
    let sql = 'select * from categorias'

    db.query(sql, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
});


app.get('/tipo', (req, res) => {
    let sql = 'select * from tipo'

    db.query(sql, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
});


app.get('/dividas', (req, res) => {
    let sql = "select descricao , valor, date_format(data,'%d/%m/%Y') data from dividas"

    db.query(sql, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    })
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

app.post('/cadastrar/despesas', (req, res) => {

    const { descricao } = req.body
    const { valor } = req.body
    const { data } = req.body
    /*const {data_vencimento}= req.body
    const {categoria}= req.body
    const {qtd_parcelas}= req.body
    //console.log('divida: ',descricao,' valor: ',valor,' data: ',data,' data_vencimento: ',data_vencimento,' categoria: ',categoria, ' qtd_parcelas: ',qtd_parcelas)*/

    let sql = "insert into despesas values (?,?,?,?)"

    db.query(sql, [null, descricao, data, valor], (err, result) => {
        if (err) console.log(err);
    })
});

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

app.post('/CadastroClientes', (req, res) => {
    let sql, resposta, { nome, email, password } = req.body

    if (!nome) {
        console.log('entrou')
        nome = null
        res.status(422).send('O campo nome é de prenchimento obrigatorio')

    } if (!email) {
        email = null
        res.status(422).send('O campo email é de prenchimento obrigatorio')

    } else {

        sql = 'select email from clientes where email = ?'

        db.query(sql, email, async (err, result) => {
            if (err) {
                console.log(err);
            } else if (result.length >= 1) {
                if (result[0].email === email) {

                    res.status(500).send('O email informado ja possui cadastro')

                }
            }
        })
    }




sql = "insert into clientes values (?,?,?,?)"
 
db.query(sql,[null,nome,email,password],(err,result)=>{
    if(err){
        
        console.log(err)

    }else {
        
        console.log('cadastrado com sucesso')

    }
})
 
//res.status(200).send('Usuario cadastrado com sucesso')
// res.status(500).send('Aconteceu um erro no servidor, tente novamente mais tarde!')

 
 
 
})









app.listen(3500, (res, req) => {
    console.log("rodando porta 3500");
});
