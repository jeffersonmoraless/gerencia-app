import styles from './SubmitButton.module.css'
function SubmitButton({text,type,func,estilo,disabled,position}){
    return(
        <div className={`${styles.boxButton} ${styles[position]}`}>
            <button className = {`${styles.btn} ${styles[estilo]}`} type={type} disabled={disabled} onClick={func}>{text} </button>
        </div>

    )
}

export default SubmitButton