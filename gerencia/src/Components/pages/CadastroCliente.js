
import Inputs from '../form/Inputs'
import SubmitButton from '../form/SubmitButton'
import btn_cancela from '../../img/btn_cancela.png'
import { Link } from 'react-router-dom'
import {useState} from 'react'
import Axios from 'axios'

import styles from './CadastroCliente.module.css'
function CadastroCliente({ip}){
    const [clientes,setClientes] = useState({'nome':'', 'email':'','password':''})

    const capturandoDados = (e) =>{
        if (e.target.getAttribute('name') === 'nome') {
        
            setClientes({'nome':e.target.value , 'email':clientes.email,'password':clientes.password})
        
        }else if(e.target.getAttribute('name') === 'email'){

            setClientes({'nome':clientes.nome, 'email':e.target.value,'password':clientes.password})

        }else if(e.target.getAttribute('name') === 'password'){

            setClientes({'nome':clientes.nome, 'email':clientes.email,'password':e.target.value})

        }
    }

    const cadastrandoCliente = (e)=>{
        e.preventDefault();
        
        Axios.post(ip +'/CadastroClientes',{
            
            nome:clientes.nome,
            email:clientes.email,
            password:clientes.password
        }).then((response)=>{
            console.log(response)
        }).catch((err)=>{
            console.log(err)
        })
    }
    
    return(
        <form className={`${styles.CadRecPasswordCliente}`}>

            <Link to={'/'}><img src={btn_cancela} alt='btn_cancela'/></Link>

           
            <Inputs type={'text'} name={'nome'} placeholder={'Nome'} text={'Nome'} handleOnChange={capturandoDados}  estilo={'inputCadRecPasswordCliente'}/>
            <Inputs type={'email'} name={'email'} placeholder={'e-mail'} text={'e-mail'} handleOnChange={capturandoDados}  estilo={'inputCadRecPasswordCliente'}/>
            <Inputs type={'password'} name={'password'} placeholder={'Senha'} text={'Senha'} handleOnChange={capturandoDados}  estilo={'inputCadRecPasswordCliente'}/>

            <SubmitButton type={'submit'} text={'Cadastrar'} func={cadastrandoCliente} estilo={'btnCadCliente'} />
        </form>
        

    )
}

export default CadastroCliente