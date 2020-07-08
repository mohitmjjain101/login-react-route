import React from 'react';
import {login} from '../utils'

const SignIn = (props) => {

    const handleLogin = ()=>{
        login();
        props.history.push('/dashboard')
    }

    return (
        <div>
            <button onClick={()=>handleLogin()}>login</button>
        </div>
    )
}

export default SignIn;