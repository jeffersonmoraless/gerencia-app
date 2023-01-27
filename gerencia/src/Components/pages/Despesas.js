import Tabela from '../layout/Tabela'
import Total from '../layout/Total'
import styles from './Despesas.module.css'


function Despesas({dividas,setDividas,despesas,setDespesas}){

    return(
        <div className={styles.conteudo_desp}>
            
            
                        <h1>Relatorios</h1>
                    
                    
                        <Total/>
                        
                        <Tabela dividas={dividas} setDividas={setDividas} />
                        
                        
                        
                    
           
        </div>

    )
}

export default Despesas