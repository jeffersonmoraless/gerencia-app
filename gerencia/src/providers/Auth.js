import React from 'react'
import { useState } from 'react'

export const AuthContext = React.createContext({})

export const AuthProvider = (props) =>{
    const [clientes, setClientes] = useState({ 'nome': '', 'email': '', 'password': '', 'passwordConfirm': '' })
    const ip = 'http://192.168.0.101:3500';
    
    const [user,setUser] = useState()
    //const [token,setToken] =useState()

   /* const setTokenUser = (data_token,redireciona) => {
        if (data_token) {
            localStorage.setItem('user', data_token)
            redireciona('Nova_conta')
            setUser(true)
        }
    }*/

    
    return(
        <AuthContext.Provider value={{clientes, setClientes,ip,setUser,user}}>
            {props.children}
        </AuthContext.Provider>
    )

}