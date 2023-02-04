import styles from './Home.module.css'
import sifra1 from '../../img/sifra1.png'
import sifra2 from '../../img/sifra2.png'
import LinkButton from '../layout/LinkButton'
import Nova_conta from './Nova_conta'

function Home({user}){
    return(
    
        <section className={styles.home_container}>
              
                <h1>Bem-Vindo ao <span>Gerencia</span></h1>
            
            

            
                <p>Começe a gerenciar agora mesmo!</p>
           
            
            
            
            <LinkButton to='/cadastroCliente' text='cadastre-se'/>
            
             <div className={styles.conteudo}>
                <img src={sifra1} alt="gerencia" className={styles.gira} />
                <img src={sifra2} alt="gerencia" className={styles.fixa}/>
            </div>
            
        </section>

    )
}

export default Home