import { Link } from 'react-router-dom'

import Container from './Container'

import styles from './Navbar.module.css'

import sifrao3 from '../../img/sifrao3.png'
import Inputs from '../form/Inputs'
import SubmitButton from '../form/SubmitButton'
import { useState } from 'react'

function Navbar(){
    const [logon,setLogon] = useState(false)

    const logando = () =>{
        
    }
    
    return(
        <nav className={styles.navbar}>
            
            <Container>
                    
                    
                        <Link to='/'><img src={sifrao3} alt='sifrao'/></Link>
                    
                    
                    { logon === true &&
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
                                {/*<li className={styles.item}>Link to='/nova_conta'>nova_conta</Link></li>*/}
                        
                        </ul>
                    }
            </Container>
                    {logon === false && 
                        <form className={styles.boxLogin}>
                            <Inputs type={'text'} name={'email'} placeholder={'e-mail'} text={'e-mail'} estilo={'boxLogin'} render={'cadastre-se'}/>
                            <Inputs type={'password'} name={'senha'} placeholder={'senha'} text={'senha'} estilo={'boxLogin'} render={'esqueceu sua senha'}/>
                    
                            <SubmitButton type={'submit'} func={logando} text={'Entrar'} estilo={'btnLoginHeader'}/>
                        </form>   
                    }
                    
                
        </nav> 
    
    )
}

export default Navbar