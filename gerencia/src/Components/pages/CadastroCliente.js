
import Inputs from '../form/Inputs'
import SubmitButton from '../form/SubmitButton'
import btn_cancela from '../../img/btn_cancela.png'
import alerta from '../../img/alerta.png'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Axios from 'axios'

import styles from './CadastroCliente.module.css'
function CadastroCliente({ ip }) {
    const [clientes, setClientes] = useState({ 'nome': '', 'email': '', 'password': '', 'passwordConfirm': '' })
    const [alert, setAlert] = useState({ 'state': 422, 'msg': '' })
    const capturandoDados = (e) => {
        if (e.target.getAttribute('name') === 'nome') {

            setClientes({ 'nome': e.target.value, 'email': clientes.email, 'password': clientes.password, 'passwordConfirm': clientes.passwordConfirm })

        } else if (e.target.getAttribute('name') === 'email') {

            setClientes({ 'nome': clientes.nome, 'email': e.target.value, 'password': clientes.password, 'passwordConfirm': clientes.passwordConfirm })

        } else if (e.target.getAttribute('name') === 'password') {

            setClientes({ 'nome': clientes.nome, 'email': clientes.email, 'password': e.target.value, 'passwordConfirm': clientes.passwordConfirm })

        } else if (e.target.getAttribute('name') === 'passwordConfirm') {

            setClientes({ 'nome': clientes.nome, 'email': clientes.email, 'password': clientes.password, 'passwordConfirm': e.target.value })

        }

    }

    const cadastrandoCliente = (e) => {
        e.preventDefault();

        Axios.post(ip + '/CadastroClientes', {

            cliente: clientes.nome,
            email: clientes.email,
            senha: clientes.password,
            senhaConfirma: clientes.passwordConfirm

        })
            .then((response) => {

                //window.alert(response.data)

            })
            .catch((err) => {
                setAlert({ 'state': err.response.status, 'msg': err.response.data })
            })
    }
    const closeAlert = () => {
        setAlert({ 'state': false, 'msg': '' })
    }

    return (
        <>
            <form className={`${styles.CadRecPasswordCliente}`}>

                <Link to={'/'}><img src={btn_cancela} alt='btn_cancela' /></Link>

                <Inputs type={'text'} name={'nome'} placeholder={'Nome'} text={'Nome'} handleOnChange={capturandoDados} estilo={'inputCadRecPasswordCliente'} />
                <Inputs type={'email'} name={'email'} placeholder={'e-mail'} text={'e-mail'} handleOnChange={capturandoDados} estilo={'inputCadRecPasswordCliente'} />
                <Inputs type={'password'} name={'password'} placeholder={'Senha'} text={'Senha'} handleOnChange={capturandoDados} estilo={'inputCadRecPasswordCliente'} />



                <Inputs type={'password'} name={'passwordConfirm'} placeholder={'Confirme A Senha'} text={'Confirme a Senha'} handleOnChange={capturandoDados} estilo={'inputCadRecPasswordCliente'} />

                {alert.state == '422' && 
                <div className={styles.alert}>
                    <div className={styles.container_msg}>
                        <img src={alerta} alt='alerta' />
                        <p>{alert.msg}</p>
                    </div>
                    <div className={styles.closeAlert}>
                        <SubmitButton type={'button'} text={'OK'} func={closeAlert} estilo={'closeAlert'} />
                    </div>

                </div>}

                <SubmitButton type={'submit'} text={'Cadastrar'} func={cadastrandoCliente} estilo={'btnCadCliente'} />
            </form>
        </>

    )
}

export default CadastroCliente