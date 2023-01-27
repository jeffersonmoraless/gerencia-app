import styles from './SubmitButton.module.css'
function SubmitButton({text,type,func,estilo}){
    return(
        <div className={styles.boxButton}>
            <button className = {`${styles.btn} ${styles[estilo]}`} type={type} onClick={func}>{text}</button>
        </div>

    )
}

export default SubmitButton