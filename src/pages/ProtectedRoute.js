import React, { useState } from 'react'


const Login =({setAuthenticated})=> {
    const [credentials, setCredentials] = useState({
        username:'',
        password:''
    })
    const [error, setError] = useState(null)

    const login = async()=>{
        return new Promise((resolve, reject)=>{
            setTimeout(() => {
                try {
                    if(credentials.username === 'admin' && credentials.password === 'admin') {
                        const user = {
                            id: 1,
                            name: 'admin',
                            token: 'PST_TWK_12'
                        }
                        localStorage.setItem('user', JSON.stringify(user))
                        setAuthenticated(true)
                        resolve(user)
                    }else{
                        throw new Error('Invalid Credentials')
                    }
                    
                } catch (err) {
                    reject(err)
                }
            }, 1000);
        })
        
    }


    const handleSubmit=async(e)=>{
        e.preventDefault()
        try {
            await login()
       
        } catch (err) {
            setError(err.message)
        }
    }

    return(
        <form style={{
            display:'flex', 
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
            margin:'30px'}} onSubmit={handleSubmit}>
            <div>
                <label>Username: </label>
                <input type='text' onChange={(e)=>(setCredentials({...credentials, username:e.target.value}))}/>
            </div>
            <div>
                <label>Password: </label>
                <input type='password' onChange={(e)=>(setCredentials({...credentials, password:e.target.value}))}/>
            </div>
            {error && <p>{error}</p>}
            <button style={{
            padding:'5px',
            margin:'10px'}} type='submit' >Login</button>
        </form>


    )
}

const ProtectedRoute = ({children}) => {

    const [Authenticated, setAuthenticated] = useState(false)

  return (
    <div>
        {Authenticated ? children : <Login setAuthenticated={setAuthenticated}/> }
    </div>
  )
}

export default ProtectedRoute