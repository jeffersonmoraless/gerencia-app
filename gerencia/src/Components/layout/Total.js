import {useEffect, useState} from 'react'
import Axios from 'axios'
import styles from './Total.module.css'

function Total(){
    const [total,setTotal] =  useState()
    

    useEffect(()=>{
    
        Axios.get('http://192.168.0.110:3500/dividas/total').then((response) =>{
            setTotal(response.data)
        })
        
  },[]); 

 
    return(
        <div className={styles.display_lateral} >
            <h1>total despesas</h1>
            { total && total.map((list) =>{
                return  <p> R$ {list.valor}</p>
                    })}
            
        </div>
       

    )
}

export default Total


// /dividas/total