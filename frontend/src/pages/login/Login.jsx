import { useState } from 'react';
import './Login.css'
export function Login() {
    const [email,setemail] = useState('');
    const [password,setpassword] = useState('');
    return(
        <>
        <h1>LOGIN PAGE</h1>
        <title>LOGIN PAGE</title>

        <div className='login_form'>
            <div>
                <input type="text" className='email' placeholder='Email' value={email} onChange={(e) => setemail(e.target.value)} />
            </div>
            <div>
                <input type="password" className='password' placeholder='Password' value={password} onChange={(e) => setpassword(e.target.value)} />
            </div>
            {/* <button className='login_btn' onclick={check}>Login</button> */}
        </div>
        </>
    )
}