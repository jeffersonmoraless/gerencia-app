import ProjetoForm from '../projeto/ProjetoForm'
import styles from './Nova_conta.module.css'
function Nova_conta({ cadastrar, dividas, setDividas, menu, setMenu }) {


    return (
        <div className={styles.novaConta_container}>
            <h1>Cadastrar Conta</h1>
            <p>cadastre suas contas para melhor controle de suas finanças</p>
            <ProjetoForm btntext='Cadastrar' cadastrar={cadastrar} dividas={dividas} setDividas={setDividas} menu={menu} setMenu={setMenu} />

        </div>

    )
}

export default Nova_conta