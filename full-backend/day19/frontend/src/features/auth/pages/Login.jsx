import React, { useState } from 'react'
import '../style/form.scss'
import { Link, useNavigate } from 'react-router'
import axios from 'axios'

import { useAuth } from '../hooks/useAuth'
const Login = () => {
    const [username, setusername] = useState("")
    const [password, setPassword] = useState("")

    const { handleLogin, loading } = useAuth()
    const navigate = useNavigate()
    
    if(loading){
        return (<main><h1>Loading...</h1></main>)
    }

    async function handleSubmit(e) {
        e.preventDefault()
        handleLogin(username, password)
        .then(res => {
            console.log('login successful');
            navigate('/')
        })

    }
    return (
        <main>
            <div className="form-container">
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        onInput={(e) => { setusername(e.target.value) }}
                        type="text"
                        name='username'
                        placeholder='Enter Username' />
                    <input
                        onInput={(e) => { setPassword(e.target.value) }}
                        type="password"
                        name='password'
                        placeholder='Enter Password' />
                    <button type='submit'>Login</button>
                </form>
                <p>Don't have an account? <Link className='toggleAuthForm' to='/register'>Register</Link></p>

            </div>
        </main>
    )
}

export default Login