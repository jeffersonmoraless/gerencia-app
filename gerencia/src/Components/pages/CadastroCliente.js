
import Inputs from '../form/Inputs'
import SubmitButton from '../form/SubmitButton'
import btn_cancela from '../../img/btn_cancela.png'

import { Await, Link } from 'react-router-dom'
import { useState } from 'react'
import Axios from 'axios'

import styles from './CadastroCliente.module.css'
import AlertContainer from '../layout/AlertContainer'
import React from 'react'
import { AuthContext } from '../../providers/Auth'
import { useNavigate } from 'react-router-dom'


function CadastroCliente() {
    const navigate = useNavigate()
    
    const { clientes, setClientes,ip} = React.useContext(AuthContext)

    
    const [alert, setAlert] = useState({ 'state': 'false', 'msg': '', 'estilo': 'aprovado' })
    const [loading, setLoading] = useState({ 'state': false })
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


    const cadastrandoCliente = async (e) => {
        e.preventDefault();

        setLoading({ 'state': true })




        await Axios.post(ip + '/CadastroClientes', {

            cliente: clientes.nome,
            email: clientes.email,
            senha: clientes.password,
            senhaConfirma: clientes.passwordConfirm

        })
            .then(async(response) => {
                
                setAlert({ 'state': response.status, 'msg': response.data.msg, 'estilo': 'aprovado' })
                

            })
            .catch((err) => {
                setAlert({ 'state': err.response.status, 'msg': err.response.data, estilo: 'error' })

            })
        setLoading({ 'state': false })



    }




    return (
        <>
        
            <form className={`${styles.CadRecPasswordCliente}`}>
           
                <Link to={'/'}><img src={btn_cancela} alt='btn_cancela' /></Link>

                <Inputs type={'text'} name={'nome'} placeholder={'Nome'} text={'Nome'} value={clientes.nome} handleOnChange={capturandoDados} estilo={'inputCadRecPasswordCliente'} />
                <Inputs type={'email'} name={'email'} placeholder={'e-mail'} text={'e-mail'} value={clientes.email} handleOnChange={capturandoDados} estilo={'inputCadRecPasswordCliente'} />
                <Inputs type={'password'} name={'password'} placeholder={'Senha'} text={'Senha'} value={clientes.password} handleOnChange={capturandoDados} estilo={'inputCadRecPasswordCliente'} />
                <Inputs type={'password'} name={'passwordConfirm'} placeholder={'Confirme A Senha'} text={'Confirme a Senha'} value={clientes.passwordConfirm} handleOnChange={capturandoDados} estilo={'inputCadRecPasswordCliente'} />










                <SubmitButton type={'submit'} text={'Cadastrar'} func={cadastrandoCliente} disabled={loading.state} estilo={'btnCadCliente'} />

            </form>
            <AlertContainer setClientes={setClientes} clientes={clientes} setAlert={setAlert} alert={alert} />
        </>

    )
}

export default CadastroCliente