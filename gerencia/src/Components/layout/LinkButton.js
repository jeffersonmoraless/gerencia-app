import { Link } from 'react-router-dom'

import styles from './LinkButton.module.css'

function LinkButton({ to, text, estilo }) {
    return (
                <Link className={`${styles.btn} ${styles[estilo]}`} to={to}>
                    {text}
                </Link>
        


    )
}

export default LinkButton