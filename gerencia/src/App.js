import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { useState } from 'react'
import Axios from 'axios'
import Home from './Components/pages/Home'
import Contato from './Components/pages/Contato'
import Sobre from './Components/pages/Sobre'
import Navbar from './Components/layout/NavBar'
import Footer from './Components/layout/Footer'
import Despesas from './Components/pages/Despesas'
import Nova_conta from './Components/pages/Nova_conta'



import Container from './Components/layout/Container'

import styles from './App.module.css'
import CadastroCliente from './Components/pages/CadastroCliente'
function App() {

  const [despesas, setDespesas] = useState()
  const [user, setUser] = useState(false )
  const [dividas, setDividas] = useState({ 'id': '', 'descricao': '', 'valor': '', 'data': '', 'data_vencimento': '', 'categoria:': '', 'qtd_parcelas': '' });
  const [menu, setMenu] = useState()
  const ip = 'http://192.168.0.110:3500';

  const cadastrar = (e) => {
    e.preventDefault();
    //console.log('funcionou',nome)

    switch (menu) {
      case '1':
        Axios.post(ip + '/cadastrar/despesas', {

          descricao: dividas.descricao,
          valor: dividas.valor,
          data: dividas.data,
        }).then((response) => {
          console.log(response)
        }).catch((err) => {
          console.log(err)
        })
        break;
      case '2':
        Axios.post(ip + '/cadastrar/dividas', {

          descricao: dividas.descricao,
          valor: dividas.valor,
          data: dividas.data,
          data_vencimento: dividas.data_vencimento,
          categoria: dividas.categoria,
          qtd_parcelas: dividas.qtd_parcelas,

        }).then((response) => {
          console.log(response)
        }).catch((err) => {
          console.log(err)
        })
        break;
      case '3':
        console.log('3');
        break;

    }
  }
/*
  function RotasPrivadas(rota,redirec){
    console.log('esta aqui',user)
    return user ? rota : <Navigate to={redirec} />
  }
*/
  return (
    <Router>
      <div className={styles.navbarapp}>

        <Navbar user={user}/>
      </div>
      <Container customClass="min_height" >

        <Routes>

          <Route exact path='/' element={<Home user={user} />}>  </Route>
          <Route exact path='/CadastroCliente' element={<CadastroCliente ip={ip} />}>  </Route>
          <Route exact path='/Contato' element={<Contato />}>  </Route>
          <Route exact path='/Sobre' element={<Sobre />}>  </Route>
          <Route exact path='/Despesas' element={<Despesas despesas={despesas} setDespesas={setDespesas} dividas={dividas} setDividas={setDividas} />}>  </Route>
          <Route exact path='/Nova_conta' element={<Nova_conta cadastrar={cadastrar} dividas={dividas} setDividas={setDividas} menu={menu} setMenu={setMenu} />}>  </Route>

        </Routes>


      </Container>
      <Footer />
    </Router>
  );
}

export default App;



























/*Axios.post('http://192.168.0.110:3500/cadastrar/despesas',{
      
         descricao:dividas.descricao,
         valor:dividas.valor,
         data:dividas.data,
      data_vencimento:dividas.data_vencimento,
      categoria:dividas.categoria,
      qtd_parcelas:null,
     }).then((response) =>{
       console.log(response)
     }).catch((err)=>{
       console.log(err)
     })
     */