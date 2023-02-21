import Axios from 'axios'
import Home from './Components/pages/Home'
import Contato from './Components/pages/Contato'
import Sobre from './Components/pages/Sobre'
import Navbar from './Components/layout/NavBar'
import Footer from './Components/layout/Footer'
import Despesas from './Components/pages/Despesas'
import Nova_conta from './Components/pages/Nova_conta'
import Container from './Components/layout/Container'
import CadastroCliente from './Components/pages/CadastroCliente'
import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Private } from './Components/contexts/Auths'
import { AuthProvider } from './providers/Auth'





function App() {

  const [despesas, setDespesas] = useState()


  const [dividas, setDividas] = useState({ 'id': '', 'descricao': '', 'valor': '', 'data': '', 'data_vencimento': '', 'categoria:': '', 'qtd_parcelas': '' });
  const [menu, setMenu] = useState()
  const ip = 'http://192.168.0.101:3500';

  const cadastrar = (e) => {
    e.preventDefault();
    //console.log('funcionou',nome)

    switch (menu) {
      case '1':

        console.log('entrou no cadastro de despesas')
        Axios.post('http://192.168.0.101:3500/cadastrar/despesas', {
          descricao: dividas.descricao,
          data: dividas.data,
          valor: dividas.valor
        },
          {
            headers: { "Authorization": JSON.parse(localStorage.getItem('user')).token }
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

      <AuthProvider>

        <Navbar />

      </AuthProvider>











      <Container customClass="min_height" >

        <Routes>

          <Route exact path='/' element={<Home />}>  </Route>

          <Route exact path='/CadastroCliente' element={
            <AuthProvider>
              <CadastroCliente />
            </AuthProvider>
          }>  </Route>

          <Route exact path='/Contato' element={<Private><Contato /></Private>}>  </Route>
          <Route exact path='/Sobre' element={<Private><Sobre /></Private>}>  </Route>
          <Route exact path='/Despesas' element={<Private><Despesas despesas={despesas} setDespesas={setDespesas} dividas={dividas} setDividas={setDividas} /> </Private>}>  </Route>
          <Route exact path='/Nova_conta' element={<Private><Nova_conta cadastrar={cadastrar} dividas={dividas} setDividas={setDividas} menu={menu} setMenu={setMenu} /></Private>}>  </Route>




        </Routes>


      </Container>
      <Footer />
    </Router>
  );
}

export default App;



/*<Route exact path='/CadastroCliente' element={<CadastroCliente ip={ip} clientes={clientes} setClientes = {setClientes} />}>  </Route>
        */























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