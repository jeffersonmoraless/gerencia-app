import Inputs from '../form/Inputs'
import SubmitButton from '../form/SubmitButton'
import styles from '../layout/Login.module.css'


import { useNavigate } from 'react-router-dom'
import React from 'react'
import { AuthContext, AuthProvider } from '../../providers/Auth'


function Login({func}) {
    const navigate = useNavigate();
    
    const { clientes, setClientes,ip} = React.useContext(AuthContext)

    const capturandoDados = (e) => {

        if (e.target.getAttribute('name') === 'email') {

            setClientes({ 'nome': clientes.nome, 'email': e.target.value, 'password': clientes.password, 'passwordConfirm': clientes.passwordConfirm })

        } else if (e.target.getAttribute('name') === 'password') {

            setClientes({ 'nome': clientes.nome, 'email': clientes.email, 'password': e.target.value, 'passwordConfirm': clientes.passwordConfirm })

        }

    }

    

    return (
        <AuthProvider>
            <form className={styles.boxLogin}>
                <Inputs type={'text'} name={'email'} placeholder={'e-mail'} text={'e-mail'} estilo={'boxLogin'} handleOnChange={capturandoDados} render={'cadastre-se'} />
                <Inputs type={'password'} name={'password'} placeholder={'senha'} text={'senha'} estilo={'boxLogin'} handleOnChange={capturandoDados} render={'esqueceu sua senha'} />

                <SubmitButton type={'submit'} func={func} text={'Entrar'} estilo={'btnLoginHeader'} position={'position_login'}/>
            </form>
        </AuthProvider>
    )
}

export default Login