import {useEffect, useState} from 'react'
import Axios from 'axios'

import styles from './Tabela.module.css'
function Tabela({dividas,setDividas}){
    const [lista,setLista] =  useState()
    const [exibir,setExibir] = useState(true);

    useEffect(()=>{
    
        Axios.get('http://192.168.0.110:3500/dividas').then((response) =>{
            setLista(response.data)
        })
        
  },[]); 
    

const mostra =()=>{
    
    setExibir(false);
}
const esconde =()=>{
    
    setExibir(true);
}

    return(
    <div className={styles.conteudo_div_tabela}>

        { exibir === true &&
            (<div className={styles.cabecalho} onClick={mostra}>
                <h1>Despesas ...</h1>
            </div>)
        }
        {exibir === false && (

            <div  onClick={esconde}>

                        <table >
                            <caption><h1>Despesas</h1></caption>
                                    <thead>
                                        
                                                <tr >
                                                            <th>Despesas</th>
                                                            <th>Data</th>
                                                            <th colspan="2">Valor</th>                     
                                                </tr>

                                    </thead>


                                    <tbody className={styles.teste}>
                                    
                                                {typeof lista !== 'undefined' && lista.map((list) =>{
                                                        return <tr key={list.id}>
                                                                        <td >{list.descricao}</td>
                                                                        <td className={styles.colun_center}>{list.data}</td>
                                                                        <td className={styles.colun_sifrao}>R$</td>
                                                                        <td className={styles.colun_center}>{list.valor}</td>                     
                                                                </tr>
                                                })}
                                
                                    </tbody>
                            

                        </table>
                </div>
        )}
    
                                               
        </div>
        
    )
}

export default Tabela