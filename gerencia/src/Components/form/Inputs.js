import { Link } from 'react-router-dom'
import LinkButton from '../layout/LinkButton'
import styles from './Input.module.css'
function Inputs({type, text, name, placeholder, handleOnChange, value,estilo, render}){
    return(
        <div className={`${styles.form_controle} ${styles[estilo]}`}>
            <label htmlFor={name}>{text}</label>
            <input type={type} name={name} className={name} placeholder={placeholder} onChange={handleOnChange} value={value}/>
            {render &&
            <p className={styles.recPassword}><LinkButton to={'/CadastroCliente'} text={render} estilo={'linkBoxLogin'}/></p>
            }
        </div>

    )
}

export default Inputs


           