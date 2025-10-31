import React, {useState} from 'react'
import { jwtDecode } from "jwt-decode"

const ProtectedRoute = ({children}) => {

    const [isAuthorized, setIsAuthorized] = useState(null)

    async function refreshToken(){

    }

    async function auth(){

        const token = localStorage.getItem("access")
        if(!token){
            setIsAuthorized(false)
            return;
        }
        
        const decoded = jwtDecode(token)
        const expiry_date = decoded.exp
        const current_time = Date.now() / 1000
        
        if(current_time > expiry_date){
            await refreshToken()
        }
        
        else{
            setIsAuthorized(true)
        }

    }

    return (
    <div>ProtectedRoute</div>
    )
}

export default ProtectedRoute