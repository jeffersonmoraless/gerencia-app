import { Link } from 'react-router-dom'

import Container from './Container'

import styles from './Navbar.module.css'

import sifrao3 from '../../img/sifrao3.png'

import Login from './Login'
import React, { useEffect } from 'react'
import { AuthContext, AuthProvider } from '../../providers/Auth'
import { setTokenUser } from '../contexts/Auths'
import Logout from './Logout'
import { useNavigate } from 'react-router-dom'
import Axios from 'axios'




function Navbar() {
    const navigate = useNavigate()
    
    const { ip, clientes, setClientes} = React.useContext(AuthContext)
    
    const saindo = () => {
        
        localStorage.removeItem('user')
        navigate('/')
    }
    const logando = (e) => {
        e.preventDefault()

        Axios.post(ip + '/user/login', {

            email: clientes.email,
            senha: clientes.password

        }).then(response => {
            
            
            setTokenUser(response, navigate)
            setClientes({'clientes.email':'','clientes.password':''})

        }).catch(err => {
            console.log('erro ', err)
        })
    }

    return (
        <>

            <div className={styles.navbar}>
               
                {localStorage.getItem('user') && 

                    <>
                        <Container>
                            <Link to='/'><img src={sifrao3} alt='sifrao' /></Link>

                            <ul className={styles.list} >

                                <li className={styles.item}>
                                    <Link to='/'>Home</Link>
                                </li>
                                <li className={styles.item}>
                                    <Link to='/despesas'>Despesas</Link>
                                </li>
                                <li className={styles.item}>
                                    <Link to='/Contato'>Contato</Link>
                                </li>
                                <li className={styles.item}>
                                    <Link to='/Sobre'>Sobre</Link>
                                </li>
                                <li className={styles.item}>
                                    <Link to='/nova_conta'>nova_conta</Link>
                                </li>

                                {/*<SubmitButton type={'submit'} func={saindo} text={'Entrar'} estilo={'btnLoginHeader'} position={'position_login'}/>*/}
                            </ul>

                        </Container>
                        <AuthProvider>


                            <Logout func={saindo} />


                        </AuthProvider>
                    
                    </>
                }
                              
                {localStorage.getItem('user') === null &&
                    <>
                        <Link to='/'><img src={sifrao3} alt='sifrao' /></Link>
                        <Login func={logando}/>
                    </>
                    }
                
                



            </div>


        </>
    )
}

export default Navbar