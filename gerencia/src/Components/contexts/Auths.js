import { Navigate, } from 'react-router-dom'

const setTokenUser = (response, redireciona) => {
    if (response.data.token) {
        
        localStorage.setItem('user', JSON.stringify(

            {
                'token': response.data.token,
                'usuario': response.data.user
            }
        )
        )
        redireciona('/Nova_conta')

    }
}


const Private = ({ children }) => {

    return localStorage.getItem('user') ? children : <Navigate to='/' />

}

export { setTokenUser, Private }