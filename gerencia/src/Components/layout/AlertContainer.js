import styles from '../layout/Alert.module.css'
import aprovado from '../../img/aprovado.png'
import alerta from '../../img/alerta.png'
import SubmitButton from '../form/SubmitButton'
import { useNavigate } from 'react-router-dom'
function AlertContainer({ setClientes, clientes, setAlert, alert }) {
    const navigate = useNavigate();
    const closeAlert = () => {
        if (alert.status === 201) {
            
           
        }
        setAlert({ 'state': false, 'msg': '', 'estilo': alert.estilo })
    }

    return (
        <>
            {(alert.state === 422 || alert.state === 500 || alert.state === 201) &&

                <div div className={styles.caixa} >
                    <div className={`${styles[alert.estilo]}`}>
                        <div className={styles.container_msg}>
                            {alert.state === 201 ?
                                 
                                    <img src={aprovado} alt='aprovado' />
                                    
                                    :

                                    <img src={alerta} alt='alerta' />

                            }
                            <p>{alert.msg}</p>
                        </div>
                        <div className={styles.closeAlert}>
                            <SubmitButton type={'button'} text={'OK'} func={closeAlert} estilo={'closeAlert'} />
                        </div>
                    </div>
                </div>
            }
        </>


    )
}

export default AlertContainer


/*<div className={`${styles[alert.estilo]}`}>
        <div className={styles.container_msg}>
            {alert.state === 201 ?
                <img src={aprovado} alt='aprovado' />
            : <img src={alerta} alt='alerta' />
    }
            <p>{alert.msg}</p>
</div>
<div className={styles.closeAlert}>
    <SubmitButton type={'button'} text={'OK'} func={closeAlert} estilo={'closeAlert'} />
</div>
</div>*/