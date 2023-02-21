import styles from '../layout/Logout.module.css'
import React, { useEffect } from 'react'
import { AuthContext } from '../../providers/Auth'
import SubmitButton from '../form/SubmitButton'




const Logout = ({func}) =>{
    
    
   
    
    return(
        
        
        
        

        <>
        
                <div className={styles.setLogout}>
                    <p>Seja bem Vindo,  {JSON.parse(localStorage.getItem('user')).usuario}.</p>
                   
                    
            
                <SubmitButton type={'button'} text={'sair'} func={func} estilo={'logout'} position={'position_logout'}></SubmitButton>
            
                </div>
          
            
        </>
            
            
        
    
    
        
        
            

    )
}
export default(Logout)